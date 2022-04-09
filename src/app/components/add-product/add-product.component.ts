import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router, private toastrService:ToastrService) { }

  product:Product = new Product();
  categories:Category[];

  ngOnInit(): void {
    this.getCategories();
  }

  addProduct(form:NgForm){
    this.productService.addProduct(this.product).subscribe(response=>{
      this.router.navigate(["/home"])
      this.toastrService.success("Ürün başarıyla eklendi")
    })
  }
  
  getCategories(){
    this.productService.getCategories().subscribe(response =>{
      this.categories = response;
    })
  }
}
