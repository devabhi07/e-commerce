import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EcommerceUser } from '../ecommerce-user';

import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user=new EcommerceUser();

  constructor(private _service:SignUpService,private route:Router) { }

  ngOnInit(): void {
  }

  signUpUser()
  {
    console.log("Heloo there");
    var result=this._service.signUpUserFromRemote(this.user);

    result.subscribe((data:any)=>{
      console.log(data)
      if(data.toString()=="User Signed UP"){
        this.route.navigate(['./login']);
      }else{
        Swal.fire("SignUp failed","OOPS SignUp failed","error");
      }
    });
    
    
  }

}
