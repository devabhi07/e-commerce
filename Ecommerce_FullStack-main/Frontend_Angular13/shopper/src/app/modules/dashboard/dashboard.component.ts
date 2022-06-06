import { OrderService } from './../../services/order.service';
import { ProductService } from './../../shared/products/product.service';
import { Component, OnInit, ViewChild,AfterViewInit  } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent1 implements OnInit  {

  bigChart:any = [];
  cards:any = [];
  pieChart:any = [];
  
  

  displayedColumns: string[] = ['orderId', 'email', 'status', 'totalOrderPrice', 'orderdDate'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dashboardService: DashboardService, private orderService:OrderService) { 
    
  }



  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
  //  this.cards = this.dashboardService.cards();
  //    this.pieChart = this.dashboardService.pieChart();
    this.getAllProducts();

      //this.dataSource.paginator = this.paginator;
  }

  editProduct(row:any){
    // this.dialog.open(AddproductdialogComponent, {
    //   width:'35%',
    //   data:row
    // }).afterClosed().subscribe((val:any)=>{
    //   console.log("sasi");
    //   this.getAllProducts();
    // });;
  }

  getAllProducts(){
    this.orderService.getAllProducts()
    .subscribe({
      next:(response:any)=>{
       console.log(response);
       this.dataSource = new MatTableDataSource(response);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;

      },
      error:()=>{
        alert("error");
      }
    })
  }

  deleteProduct(id:number){
    // this.productService.deleteProduct(id)
    //   .subscribe({
    //     next:(response:any)=>{
    //       alert("product Deleted successfully");
    //       this.getAllProducts();
        
    //     },
    //     error:()=>{
    //       alert("error");
    //     }
    //   })
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
