import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { AdminGuard } from './components/login/admin.guard';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { WantLogin } from './components/login/wantLogin.guard';
import { AboutComponent } from './components/about/about.component';
import { LoginGuard } from './components/login/login.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full", canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent, canActivate:[WantLogin]},
  {path:"home", component:HomeComponent, canActivate:[LoginGuard]},
  {path:"signup", component:SignUpComponent},
  {path:"about", component:AboutComponent, canActivate:[LoginGuard]},
  {path:"contact", component:ContactComponent, canActivate:[LoginGuard]},
  {path:"cart", component:CartComponent, canActivate:[LoginGuard]},
  {path:"products/category/:categoryId", component:HomeComponent, canActivate:[LoginGuard]},
  {path:"addproduct", component:AddProductComponent, canActivate:[AdminGuard]},
  {path:"myProfile", component:MyProfileComponent, canActivate:[LoginGuard]},
  {path:"registeredUsers", component:RegisteredUsersComponent, canActivate:[AdminGuard]},
  {path:"**", pathMatch:"full", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
