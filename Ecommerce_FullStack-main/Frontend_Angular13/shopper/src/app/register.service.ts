import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EcommerceUser } from './ecommerce-user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl="http://localhost:10002/shopper/api/customer/editProfile";

   

  constructor(private _http:HttpClient) { }

  registerUserFromRemote(user:EcommerceUser,email:any):Observable<any>
  {
     return this._http.put(`${this.baseUrl}/${email}`,user,{responseType :'text' as 'json'});
  }

}
