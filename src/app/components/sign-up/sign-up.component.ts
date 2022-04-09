import { AccountService } from './../../services/account.service';
import { NgForm } from '@angular/forms';
import { User } from './../login/user';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private accountService:AccountService, private router:Router) { }

  user:User = new User();

  ngOnInit(): void {
  }

  signUp(form:NgForm){
    this.accountService.signUp(this.user).subscribe(response=>{
      this.router.navigate(['/login']);
    });
  }

}
