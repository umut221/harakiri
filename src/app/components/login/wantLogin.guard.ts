import { AccountService } from './../../services/account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
    providedIn:"root"
})
export class WantLogin implements CanActivate{
    constructor(private accountService:AccountService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.accountService.isLoggedIn()){
            this.router.navigate(['/home'])
            return false;
        }else{
            return true;
        }
    }

}