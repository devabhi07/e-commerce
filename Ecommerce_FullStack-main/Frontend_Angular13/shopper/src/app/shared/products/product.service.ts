import { products } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl : string = 'http://localhost:10002/shopper/api/product/';
  constructor(private httpClient:HttpClient) { }

  addProduct (product:products){
    let result:any = this.httpClient.post( this.baseUrl+'add-product',product);
    return result;
    
  }

  getAllProducts(){
    let result:any = this.httpClient.get( this.baseUrl+"get-products");
    return result;
  }

  deleteProduct(id:number){
    let result:any = this.httpClient.delete( this.baseUrl+"delete-product/"+id);
    return result;
  }
  
  
  
}
