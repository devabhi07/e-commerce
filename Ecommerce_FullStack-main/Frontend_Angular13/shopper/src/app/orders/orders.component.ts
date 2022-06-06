import { OrderService } from './../services/order.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['orderId', 'email', 'status', 'totalOrderPrice', 'orderdDate'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private orderService:OrderService) { }

  ngOnInit(): void {
    this.getAllProducts();
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
    this.orderService.getProducts(localStorage.getItem("email"))
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
