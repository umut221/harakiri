import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = "http://localhost:3000/";
  productUrl:string = this.apiUrl + "products";
  categoryUrl:string = this.apiUrl +"categories";
  addedToCart:Product[] = [];
  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productUrl);
  }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.categoryUrl);
  }

  getProductsByCategory(categoryId:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productUrl+"?categoryId="+categoryId);
  }

  addProduct(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.productUrl,product);
  }

  deleteProduct(id:string):Observable<Product>{
    return this.httpClient.delete<Product>(this.productUrl+"/"+id)
  }
}








//BURASI LOCALSTORAGE İLE CART OLUŞTURMA İÇİNDİ ARTIK BACK-END İLE HALLEDİCEM BU İŞİ GEREK KALMADI BURAYA

// addToCart(product:Product){
//   this.addedToCart = this.getCartFromLS();
//   localStorage.removeItem("products");  
//   if(this.addedToCart.some(p =>{
//     return p.id === product.id
//   })){
//     this.addedToCart = this.addedToCart.map(p=>{
//       if(p.id === product.id){
//         p.quantity++
//       }
//       return p;
//     })
//     localStorage.setItem("products", JSON.stringify(this.addedToCart));
//     this.toastrService.success(product.productName+ " adlı ürünün sepetteki adedi arttırıldı")
//   }else{
//     this.addedToCart.push(product);
//     localStorage.setItem("products", JSON.stringify(this.addedToCart));
//     this.toastrService.success(product.productName+ " adlı ürün sepete eklendi");
//   }
// }
// getCartFromLS():Product[]{
//   let value = localStorage.getItem("products");
//   let items:Product[] = [];
//   if(value){
//     items = JSON.parse(value);
//   }
//     return items;
// }