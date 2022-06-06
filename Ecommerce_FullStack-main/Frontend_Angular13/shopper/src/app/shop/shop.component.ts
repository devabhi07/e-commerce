import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products:any;
  currentProductId:any;
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.listProducts();
  }


  listProducts(){
    this.productService.getProductList()
    .subscribe((response: any)=>this.products=response )
  }

  getInputText(value:string){
    this.productService.searchProduct(value)
    .subscribe((response: any)=>this.products=response )
  }

}
