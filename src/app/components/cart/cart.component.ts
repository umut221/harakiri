
import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService,private changeDetectorRef:ChangeDetectorRef) {
    this.activeUserId = this.cartService.getUserCartId();
  }

  addedToCart:Product[] = [];
  activeUserId:string;

  ngOnInit() {
    this.getCartById(this.activeUserId);
  }

  getCartById(id:string){
      this.cartService.getCartById(id).subscribe(response=>{
        this.addedToCart = response.cartItems;
        this.changeDetectorRef.detectChanges();
        this.changeDetectorRef.markForCheck();
     })
  } 
}

//BURASI LOCALSTORAGE İLE CART İÇİNDİ ARTIK BU İŞİ DB İLE HALLEDİYORUM (HALLEDEMİYORUM!!!!!!)

// getAddedToCart(){
//   this.addedToCart = this.productService.addedToCart;
// }

// removeToCart(product:Product){
  
//   localStorage.removeItem("products");
//   if(this.addedToCart.find(p=>{
//     p.quantity>1
//   })){
//     this.addedToCart = this.addedToCart.map(p=>{
//       if(p.id === product.id){
//         p.quantity--;
//       }
//       return p;
//     })
//   }else{
//     this.addedToCart = this.addedToCart.filter(p=>{
//       if(p.id !== product.id){
//         return p;
//       }else{
//         return null;
//       }
//     })
//   }
//   localStorage.setItem("products", JSON.stringify(this.addedToCart));
// }

