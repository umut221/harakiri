import { Router } from '@angular/router';
import { AccountService } from './../../services/account.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService, private router:Router, private toastrService:ToastrService) { }

  user:User = new User();
  path:string;
  tempUsers:User[] = [];

  ngOnInit(): void {
  }

  login(form:NgForm){
    this.accountService.login(this.user).subscribe(response=>{
      this.tempUsers = response;
      const tempUser:User | undefined = this.tempUsers.find(user=>{
        return user.username == this.user.username && user.password == this.user.password
        })
        this.accountService.signMatch(tempUser,this.user);     
    });
  }
}


// BU KISMI DİREKT ACCOUNT SERVİCE İÇİNE ALDIM BİRAZ DEĞİŞTİREREK YİNE DE SIKINTI ÇIKAR DİYE DURSUN BURADA
// if(tempUser){
//   this.accountService.setLoggedIn(true);
//   localStorage.setItem("isLogged",this.user.username);
//   this.router.navigate(['/home']);
//   this.toastrService.success("Giriş Başarılı. Hoşgeldin " + this.user.username);
//   return true;
// }else{
//   this.router.navigate(['/login']);
//   this.toastrService.error("Kullanıcı adı veya şifre yanlış");
//   return false;
// }