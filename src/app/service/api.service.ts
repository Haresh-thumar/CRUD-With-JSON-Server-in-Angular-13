import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // for set api path of add product data
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/productList/", data);
  }

  // for get api of product data
  getProduct() {
    return this.http.get<any>("http://localhost:3000/productList/");
  }

  // for put api of product data
  putProduct(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/productList/" + id, data);
  }

  // for put api of product data
  deleteProduct(id: number) {
    return this.http.delete<any>("http://localhost:3000/productList/" + id);
  }

}
