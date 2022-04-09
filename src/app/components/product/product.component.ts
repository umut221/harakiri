import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';
import { CartService } from './../../services/cart.service';

import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService, private cartService:CartService, private activatedRoute:ActivatedRoute, private accountService:AccountService,private toastrService:ToastrService, private changeDetectorRef:ChangeDetectorRef) { }

  products:Product[] = [];
  filterText:string;
  userCartItems:Product[] = [];

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
    if(params["categoryId"]){
      //sanki dünyada tek başımaymışım gibi
      this.getByCategoryId(params["categoryId"]);
    }else{
      this.getProducts();
    }
    });
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response;
    })
  }

  getByCategoryId(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response;
    })
  }

  isLoggedUser():boolean{
    return this.accountService.isLoggedIn();
  }

  isAdminLoggedIn():boolean{
    return this.accountService.isAdminLogged();
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe(response=>{
      window.location.reload();
      this.toastrService.success("Ürün Başarıyla silindi")
    });
  }
}
