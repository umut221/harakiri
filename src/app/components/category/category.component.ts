import { Category } from './../../models/category';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productService:ProductService) { }

  categories:Category[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.productService.getCategories().subscribe(response=>{
      this.categories = response;
    })
  }

}
