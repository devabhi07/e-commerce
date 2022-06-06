import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Payment } from '../common/payment';
import { PaymentServiceService } from '../services/payment-service.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { of, switchAll } from 'rxjs';
import Swal from 'sweetalert2';
import { fadeInItems } from '@angular/material/menu';
import { isNgTemplate } from '@angular/compiler';
import { OrderService } from '../services/order.service';
import { Orderdata } from '../common/orderdata';
import { Router } from '@angular/router';

declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails :any;

  totalproducts : any = 0;
  constructor(private cartService :CartService,private paymetService:PaymentServiceService,private orderservice:OrderService,private route:Router) { }
  totalPrize:any=0;


  ngOnInit(): void {

    
    var email=localStorage.getItem("email")
 
    if(email==null){
     console.log("No Email");
  
    this.route.navigate(['./home']);
      }


    let result : any = this.cartService.getAllProducts(localStorage.getItem("email"));

    result
    .subscribe({
      next:(response:any)=>{
       console.log(response);
       this.cartDetails = response;
       console.log(this.cartDetails);
       this.totalproducts = this.cartDetails.length;
        for( let items of this.cartDetails){
          this.totalPrize+=items.quantityprice;
        }

      },
      error:()=>{
        alert("error");
      }
    })

  }

  increaseItemCount(item:any) {
    item.productQuantity++;
    item.quantityprice=item.productQuantity*item.productDiscountPrice;
  };
  
  decreaseItemCount = function(item:any) {
   if(item.productQuantity>0){
    item.productQuantity--;
    item.quantityprice=item.productQuantity*item.productDiscountPrice;
  
   }
 
  };

  
  paymentMessage:any;
  PaymentInfo: Payment=new Payment();
  error:any;
  orderdata:Orderdata=new Orderdata();
  setOrders(){
    this.orderdata.email=localStorage.getItem("email");
    this.orderdata.totalPrice=this.totalPrize;
    this.orderservice.setOrder(this.orderdata).subscribe((data)=>console.log(data));
    //this.route.navigate(['./home']);
  }
  
  options = {
    "key": "rzp_test_eKMQiTe1MYTomX",
    "amount": "", 
    "name": "Shopper",
    "description": "Payment",
    "order_id":"",
    "handler":  (_response: any) =>{
        console.log(_response.razorpay_payment_id);
        console.log(_response.razorpay_order_id);
        console.log(_response.razorpay_signature);
        Swal.fire("Good Job","Payment successful","success");
        this.setOrders()
    },
    "prefill": {
    "name": "",
    "email": `${localStorage.getItem("email")}`,
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };


  checkResponse(){
   console.log(this.paymentMessage);

   if(this.paymentMessage.orederStatus=="created"){
    this.options.order_id =this.paymentMessage.orderId;
    this.options.amount = this.paymentMessage.orederAmount; //paise
    
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
               
    rzp1.on('payment.failed',  (response:any ) =>{    
        // Todo - store this information in the server
        console.log(response.error.code);    
        console.log(response.error.description);    
        console.log(response.error.source);    
        console.log(response.error.step);    
        console.log(response.error.reason);    
        console.log(response.error.metadata.order_id);    
        console.log(response.error.metadata.payment_id);
        this.error = response.error.reason;
        Swal.fire("Failed!!","OOps Payment failed !!","error");
    }
    );
   }
  }
  startPayment(){
    this.PaymentInfo.setAmount(this.totalPrize+20);
    this.paymetService.makePaymentService(this.PaymentInfo).subscribe((response: any)=>
    {
      this.paymentMessage=response
      this.checkResponse();
    });
  
  }

}



