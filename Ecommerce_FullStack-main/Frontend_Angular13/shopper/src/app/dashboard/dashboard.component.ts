import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    
    var email=localStorage.getItem("email")
 
    if(email==null){
     console.log("No Email");
  
    this.route.navigate(['./home']);
      }
  }

  logOut()
  {
    localStorage.clear();
    this.route.navigate(['./login']);

  }

}
