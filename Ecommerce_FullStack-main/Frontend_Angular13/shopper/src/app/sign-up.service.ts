import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { EcommerceUser } from './ecommerce-user';



@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl="http://localhost:10002/shopper/api/customer/signUp";

  constructor(private _http:HttpClient) { }

 
signUpUserFromRemote(user:EcommerceUser)
{
    return this._http.post(this.baseUrl,user,{responseType:'text' as 'json'});
}

}
