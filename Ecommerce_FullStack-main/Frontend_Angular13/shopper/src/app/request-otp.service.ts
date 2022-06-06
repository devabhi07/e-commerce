import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EcommerceUser } from './ecommerce-user';

@Injectable({
  providedIn: 'root'
})
export class RequestOtpService {

  private baseUrl="http://localhost:10002/shopper/api/customer/send-otp";

  constructor(private _http:HttpClient) { }

  requestOtpFromRemote(user:EcommerceUser)
  {
      return this._http.post(this.baseUrl,user,{responseType: 'text' as 'json'});    
  }

}
