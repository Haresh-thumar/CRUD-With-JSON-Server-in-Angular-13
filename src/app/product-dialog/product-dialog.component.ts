import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {

  // for Radio Button Field
  freshnessList = ["New Brand", "Second Hand", "Refurbished"];

  // declair form type of productForm
  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef : MatDialogRef<ProductDialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    });

  }

  // add product data method in db.json
  addProduct() {
    if(this.productForm.value.length == ""){
      alert("please fill the all detail")
    }
    if (this.productForm.valid) {
      this.api.postProduct(this.productForm.value).subscribe({
        next: (res) => {
          alert("product Added Successfully");
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error: () => {
          alert("Error While adding the product");
        }
      })
    }
  }




}
