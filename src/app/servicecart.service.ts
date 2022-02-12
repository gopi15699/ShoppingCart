import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicecartService {

  constructor(public serve : HttpClient) { }
  
  

  loginserve(recd:any){
  //  console.log(recd);
   return this.serve.post<string>("http://localhost:3000/register", recd);
   
  }
  signinserve(get:any){
    // console.log(get);
    return this.serve.post<any[]>("http://localhost:3000/login",get);
     
   }
   
   isLoggedin()
   {
     return !!localStorage.getItem("key");
   }

}
