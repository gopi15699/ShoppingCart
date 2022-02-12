import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }
  getprodlist(){
    return this.http.get<any[]>("http://localhost:3000/listproduct")
  }

}


