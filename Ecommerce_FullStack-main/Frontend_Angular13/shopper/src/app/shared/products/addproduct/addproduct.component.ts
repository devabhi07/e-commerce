import { ProductService } from './../product.service';
import { AddproductdialogComponent } from './../addproductdialog/addproductdialog.component';
import { Component, OnInit, AfterViewInit,  ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NotificationsService} from 'angular2-notifications';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'category', 'productPrice', 'productDiscountPrice', 'addeddate', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private notificationsService: NotificationsService, private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(AddproductdialogComponent, {
      width:'35%'
    }).afterClosed().subscribe((val:any)=>{
      console.log("sasi");
      this.getAllProducts();
    });
  }

  editProduct(row:any){
    this.dialog.open(AddproductdialogComponent, {
      width:'35%',
      data:row
    }).afterClosed().subscribe((val:any)=>{
      console.log("sasi");
      this.getAllProducts();
    });;
  }

  // onSuccess1(){
  //   this.notificationsService.success('Success', "response.toString()", {
  //     position:['top','left'],
  //     timeOut:2000,
  //     animate:'fade',
  //     showProgressBar:true });
  // }

  getAllProducts(){
    this.productService.getAllProducts()
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
    this.productService.deleteProduct(id)
      .subscribe({
        next:(response:any)=>{
          alert("product Deleted successfully");
          this.getAllProducts();
        
        },
        error:()=>{
          alert("error");
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
