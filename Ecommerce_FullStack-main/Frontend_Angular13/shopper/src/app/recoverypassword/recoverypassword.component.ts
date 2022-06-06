import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceUser } from '../ecommerce-user';
import { RecoveryPasswordService } from '../recovery-password.service';

@Component({
  selector: 'app-recoverypassword',
  templateUrl: './recoverypassword.component.html',
  styleUrls: ['./recoverypassword.component.css']
})
export class RecoverypasswordComponent implements OnInit {

  user=new EcommerceUser();

  constructor(private _service:RecoveryPasswordService,private route:Router) { }

  ngOnInit(): void {
    
  }

  verifyOtp()
  {
      var result=this._service.verifyOtpFromRemote(this.user);

        result.subscribe((data:any)=>{console.log(data)
        
        if(data.toString()=="Success")
        {
          // <a [RouterLink]="['./home']"></a>
          this.route.navigate(['./login']);
        }
        else
        {
          this.route.navigate(['./home']);
        }
      });
  }

}
