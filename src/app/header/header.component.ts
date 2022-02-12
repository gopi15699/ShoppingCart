import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicecartService } from '../servicecart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userser : ServicecartService, public router : Router) { }

  ngOnInit(): void {
  }

  doLogout()
  {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
