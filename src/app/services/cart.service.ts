import { Product } from './../models/product';
import { Cart } from './../models/cart';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient, private toastrService:ToastrService) {}
  apiUrl:string = "http://localhost:3000/carts";
  cartId:string;
  products:Product[];

  getUserCartId(){
    let value = localStorage.getItem("cartId");
    let userId:string = "";
    if(value){
      userId = value;
    }
    return userId;
  }

  //3000/carts?userId=1
  getCartById(id:string):Observable<Cart>{
    return this.httpClient.get<Cart>(this.apiUrl +"/" + id);
  }

  addToCart(id:string,cart:Cart):Observable<Cart>{
    return this.httpClient.put<Cart>(this.apiUrl+"/"+id,cart)
  }

}
