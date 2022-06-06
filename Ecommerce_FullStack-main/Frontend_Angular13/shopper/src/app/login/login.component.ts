import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { EcommerceUser } from '../ecommerce-user';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new EcommerceUser();

  constructor(private _service:LoginService ,private route:Router) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    
    

    var result=this._service.loginUserFromRemote(this.user);

      result.subscribe((data:any)=>{console.log(data)
        localStorage.setItem("email",data);

        if(data.toString()=="Admin@gmail.com")
        {
          
          this.route.navigate(['./admin']);
        }else if(data.toString()=="login failed!!!! SIGN UP FIRST Or Wrong PassWord"){
            Swal.fire("login failed","OOPS login failed","error");
        }
        else
        {
          this.route.navigate(['./home']);
        }
      });

    
      


  }

  // forgotpassword()
  // {
  //   var result=this._service.sendOtp(this.user);

  //       result.subscribe((data:any)=>console.log(data));

  // }

  
  



}
