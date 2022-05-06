import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, public api: ApiService, private dialogRef: MatDialogRef<ProductDialogComponent>) { }

  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(ProductDialogComponent, {
      width: '30%',
      disableClose: true
    }).afterClosed().subscribe(val => {

    })
  }



}
