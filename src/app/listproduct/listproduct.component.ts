import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

   product:any[]=[];

  constructor(public pdtser: ProductsService) { }

  ngOnInit(): void {
    this.pdtser.getprodlist().subscribe((data:any[])=>{
        this.product=data;
        console.log(this.product);
    },(error : any)=>{
      console.log(error);
      
    })
  }
 

}
