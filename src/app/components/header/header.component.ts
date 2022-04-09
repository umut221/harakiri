import { Observable } from 'rxjs';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  time$ = new Observable<number>((observer) => {
    setInterval(() => observer.next(new Date().getTime()), 1000);
  });

  ngOnInit(): void {
  }

  isLoggedIn():boolean{
    return this.accountService.isLoggedIn();
  }

  isAdminLoggedIn():boolean{
    return this.accountService.isAdminLogged();
  }

  logOut(){
    this.accountService.logOut();
    
  }

}
