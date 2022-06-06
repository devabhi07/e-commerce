import { Component } from '@angular/core';
import { EcommerceUser } from './ecommerce-user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularshop';
  user=new EcommerceUser();
}
