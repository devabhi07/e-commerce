import { AddproductComponent } from './../addproduct/addproduct.component';
import { products } from './../products';
import { ProductService } from './../product.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material/dialog';


@Component({
  selector: 'app-addproductdialog',
  templateUrl: './addproductdialog.component.html',
  styleUrls: ['./addproductdialog.component.scss']
})
export class AddproductdialogComponent implements OnInit {

  productForm !: FormGroup;
  productId!:any ;
  actionBtn = 'save';
  constructor(private formBuilder: FormBuilder, 
    private productService:ProductService, 
    @Inject(MAT_DIALOG_DATA) public editProduct:any,
    private dialogRef :MatDialogRef<AddproductdialogComponent>) { }

  ngOnInit(): void {
    this.productForm =this.formBuilder.group({
      productName:['',Validators.required],
      category:['',Validators.required],
      imgsrc:['',Validators.required],
      addeddate:['',Validators.required],
      productPrice:['',Validators.required],
      productDiscountPrice:['',Validators.required]

    
    });

    if(this.editProduct){
      this.actionBtn='Update';
      this.productForm.controls['productName'].setValue(this.editProduct.productName);
      this.productForm.controls['category'].setValue(this.editProduct.category);
      this.productForm.controls['imgsrc'].setValue(this.editProduct.imgsrc);
      this.productForm.controls['addeddate'].setValue(this.editProduct.addeddate);
      this.productForm.controls['productPrice'].setValue(this.editProduct.productPrice);
      this.productForm.controls['productDiscountPrice'].setValue(this.editProduct.productDiscountPrice);
      this.productId=parseInt(this.editProduct.productId);
    }
    console.log(this.editProduct);

  }

  addProduct(){
    console.log(this.productForm.value.productName);
   let productName = this.productForm.value.productName;
   let category = this.productForm.value.category;
   let imgsrc = this.productForm.value.imgsrc;
   let addeddate = this.productForm.value.addeddate;
   let productPrice = this.productForm.value.productPrice;
   let productDiscountPrice = this.productForm.value.productDiscountPrice;
   let product :any;
   if(this.productId>0){
    product=new products(this.productId,productName, category, imgsrc, addeddate, productPrice, productDiscountPrice);
    if(this.productForm.valid){
      this.productService.addProduct(product)
      .subscribe({
        next:(response:any)=>{
          alert("product Updated successfully");
          this.productForm.reset();
          //this.productService.onSuccess();
          this.dialogRef.close('save');
          product=null;
        },
        error:()=>{
          alert("error");
        }
      })
     }
   }else{
    if(this.productForm.valid){
      this.productService.addProduct(this.productForm.value)
      .subscribe({
        next:(response:any)=>{
          alert("product added successfully");
          
          this.productForm.reset();
          //this.productService.onSuccess();
          this.dialogRef.close('Update');

        },
        error:()=>{
          alert("error");
        }
      })
     }
   }
  
   //subscribe((data:any) =>console.log(data.toString()));;
   
  
  };



 

}
