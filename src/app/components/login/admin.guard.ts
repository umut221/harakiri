import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Injectable({
    providedIn:"root"
})
export class AdminGuard implements CanActivate{
    constructor(private accountService:AccountService, private router:Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.accountService.isAdminLogged()){
            return true;
        }else{
            this.router.navigate(["/home"]);
            return false;
        }
    }

}