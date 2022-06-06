import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  products:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }


  listProducts(){
    this.productService.getProductList()
    .subscribe((response: any)=>this.products=response )
  }


  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;

  
}