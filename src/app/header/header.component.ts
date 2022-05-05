import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, private api: ApiService,) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(ProductDialogComponent, {
      width: '30%',
      disableClose: true
    });
  }


  // get product data method in db.json
  getAllProducts() {
    this.api.getProduct().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        alert("Error While Fetching the Records..!!")
      }
    })
  }


}
