import { User } from './../login/user';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  users:User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.accountService.getUsersWithoutSubs().subscribe(response=>{
      this.users = response;
    })
  }
}
