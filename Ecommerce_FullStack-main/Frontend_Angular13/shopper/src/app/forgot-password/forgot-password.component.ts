import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceUser } from '../ecommerce-user';
import { RequestOtpService } from '../request-otp.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user=new EcommerceUser();

  constructor(private _service:RequestOtpService,private route:Router) { }

  ngOnInit(): void {

    
    // var email=localStorage.getItem("email")
 
    // if(email==null){
    //  console.log("No Email");
  
    // this.route.navigate(['./home']);
    //   }

  }

  requestOtp()
  {
    var result=this._service.requestOtpFromRemote(this.user);

      result.subscribe((data:any)=>{console.log(data)
      
      if(data.toString()=="Verify")
      {
        // <a [RouterLink]="['./home']"></a>
        this.route.navigate(['./recovery-password']);
      }
      else
      {
        this.route.navigate(['./home']);
      }
    });

      
  }

}
