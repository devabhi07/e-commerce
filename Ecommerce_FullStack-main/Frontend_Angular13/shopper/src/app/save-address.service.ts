import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EcommerceAddress } from './ecommerce-address';

@Injectable({
  providedIn: 'root'
})
export class SaveAddressService {

  baseUrl="http://localhost:10002/shopper/api/customer/address";

  constructor(private _http:HttpClient) { }

  saveAddressFromRemote(address:EcommerceAddress)
  {
    return  this._http.post(this.baseUrl,address,{responseType:'text' as 'json'});
  }

}
