import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {

    
 var email=localStorage.getItem("email")
 if(email==null){
   console.log("No Email");
  
  this.route.navigate(['./home']);
  }

  }
}
