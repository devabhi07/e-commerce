import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartProduct } from '../common/cart-product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {

  products:any;
  singleProduct:any;
  currentProductId:any;
  productId:any;

  cartProduct: CartProduct=new CartProduct();


  constructor(private route1:Router,private productService:ProductService,private route:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {

    var email=localStorage.getItem("email")
 
    if(email==null){
     console.log("No Email");
  
    this.route1.navigate(['./home']);
      }


    
    this.route.params.subscribe((params:any) => {
      this.productId= +params['id'];
      this.listProducts(this.productId) 
    });
  }


  listProducts(id:number){
    
    if(id==0){
      this.currentProductId= 1;
    }else{
        this.currentProductId=id;
    }

    this.productService.getSingleProduct(this.currentProductId)
    .subscribe((response: any)=>this.singleProduct=response )
  }


  addToCart(Quantity:string){
    Swal.fire("done","Product Added to cart","success");
    this.cartProduct.setproductQuantity(+Quantity);
    this.cartProduct.setEmail(localStorage.getItem("email"));
    this.cartProduct.setproductId(this.productId);
    this.cartProduct.settotalPrize((+Quantity)*this.singleProduct.productDiscountPrice);
    this.cartProduct.setproductstatus("IN-CART");
    this.cartService.addToCart(this.cartProduct).subscribe((data:any)=>console.log(data));
  }

}
