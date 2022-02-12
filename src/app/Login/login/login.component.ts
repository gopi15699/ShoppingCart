import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicecartService } from 'src/app/servicecart.service';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin : FormGroup;

  service: any;
  login : FormGroup;
  info : string;

  constructor(public lgn:ServicecartService, public router: Router) { 
     
  }

  ngOnInit(): void {
    $('.toggle').click(function(){
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });

    this.signin = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'userpassword' : new FormControl(null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{8,}')])
    });
  }
  signupForm(value:NgForm)
  {
    //  console.log(value.value);
     this.service = value.value;
     this.lgn.loginserve(this.service).subscribe((recd:string)=>{
       console.log(recd);
       this.info = recd;
       value.reset();
       
     },(error:any)=>{
       console.log(error);
       this.info = "Something went wrong";
       
     })
    //  console.log(this.service);
     
  }

  get usrnme()
  {
    return this.signin.get("username");
  }

  get usrmail()
  {
    return this.signin.get("userpassword");
  }

  doLogin(){
    this.login = this.signin.value;
    this.lgn.signinserve(this.login).subscribe((get:any[])=>{
      console.log(get);
      // this.info = get;
      if(get.length==0)
      {
        this.info = "invalid user";
      }
      else{
        localStorage.setItem("key",get[0]._id);
        this.router.navigateByUrl("/");
        this.signin.reset();
      }
      
      
      
    },(error:any)=>{
      console.log(error);
      this.info = "something went hrong";
      
    });
    
  }

}
