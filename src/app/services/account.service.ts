import { ToastrService } from 'ngx-toastr';
import { User } from './../components/login/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl = "http://localhost:3000/users";
  users:User[] = [];
  activeUser:User | undefined;

  constructor(private router:Router, private httpClient:HttpClient, private toastrService:ToastrService) {}


  login(user:User):Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  isAdminLogged():boolean{
    if(localStorage.getItem("adminLogged")){
      return true;
    }else{
      return false;
    }
  }

  isLoggedIn():boolean{
    if(localStorage.getItem("isLogged")){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
    this.toastrService.info("Çıkış Yapıldı")
  }

  signUp(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl,user);
  }

  signMatch(tempUser:User | undefined, user:User):boolean{
    if(tempUser){
      this.activeUser = this.getUsers().find(p =>{
        return p.username === tempUser.username;
      })
      if(this.activeUser){
        if(this.activeUser.id === "1"){
          localStorage.setItem("adminLogged","admin");
          this.router.navigate(["/home"]);
          this.toastrService.success("Admin Girişi Başarılı. Hoşgeldiniz Umut Bey");
          return true;
        }else{
          localStorage.setItem("isLogged",this.activeUser.id+"");
          localStorage.setItem("cartId",this.activeUser.cartId);
          this.router.navigate(['/home']);
          this.toastrService.success("Giriş Başarılı. Hoşgeldin " + user.username);
          return true;
        }
      }else{
        return false;
      }
    }else{
      this.router.navigate(['/login']);
      this.toastrService.error("Kullanıcı adı veya şifre yanlış");
      return false;
    }
  }

  getUsers():User[]{
    this.httpClient.get<User[]>(this.apiUrl).subscribe(response=>{
      this.users = response;
      return this.users;
    });
    return this.users;
  }

  getById(id:string):Observable<User>{
    return this.httpClient.get<User>(this.apiUrl + "/" + id);
  }

  getActiveUserId(){
    let value = localStorage.getItem("isLogged");
    let id = "";
    if(value){
      id = value;
    }
    return id;
  }

  getUsersWithoutSubs():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

}





  //ADMİN İŞLERİ DENEMELERİ BELKİ LAZIM OLUR (BU ARADA BAŞARISIZ İŞLEMLER)
  // adminMatch(tempUser:User | undefined, user:User):boolean{
  //   if(tempUser){
  //     localStorage.setItem("adminLogged", user.username);
  //     this.router.navigate(['admin-panel']);
  //     this.toastrService.success("Yönetici Girişi Başarılı " + user.username);
  //     this.isUser = true;
  //     return true;
  //   }else{
  //     this.router.navigate(["/login"]);
  //     this.toastrService.error("Kullanıcı adı veya şifre yanlış");
  //     return false;
  //   }
  // }

  

  // adminLogin(user:User):Observable<User[]>{
  //   return this.httpClient.get<User[]>(this.adminUrl);
  // }



  // loginTest(user:User){
  //   this.httpClient.get<User[]>(this.apiUrl).subscribe(response=>{
  //     this.tempUsers = response;
  //     const tempUser:User | undefined = this.tempUsers.find(user=>{
  //       return user.username == user.username && user.password == user.password
  //       })
  //       this.signMatch(tempUser,user);
  //       if(!this.isUser){
  //         this.adminLogin(user).subscribe(response =>{
  //           this.tempUsers =response;
  //           const tempUser:User | undefined = this.tempUsers.find(user=>{
  //             return user.username == user.username && user.password == user.password
  //             })
  //             this.adminMatch(tempUser,user);
  //         })
  //       }     
  //   });
  // }


  
  // adminLoggedIn():boolean{
  //   if(localStorage.getItem("adminLogged")){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
