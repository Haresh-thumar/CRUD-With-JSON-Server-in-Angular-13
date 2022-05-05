import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // for set api path of add product data
  postProduct(data: any){
     return this.http.post<any>("http://localhost:3000/productList/", data);
  }

  // for get api of product data
  getProduct(){
    return this.http.get<any>("http://localhost:3000/productList/");
  }

}
