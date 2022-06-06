import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CartProduct } from '../common/cart-product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl : string = 'http://localhost:10002/shopper/api/cart/';
  constructor(private httpClient:HttpClient) { }




  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllProducts(userEmail:any){
    let params = new HttpParams().set('email', userEmail);
    let result:any = this.httpClient.get( this.baseUrl+"get-cart",{ params: params });
    return result;
  }


  addToCart(cartProduct:CartProduct){
    return this.httpClient.post(this.baseUrl+"addCart", cartProduct, {responseType:'text' as 'json'});
}

}
