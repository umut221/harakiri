import { User } from './../login/user';
import { AccountService } from 'src/app/services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  myUser:User = new User();

  ngOnInit(): void {
    this.getMyProfile(this.accountService.getActiveUserId())
  }

  getMyProfile(id:string){
    this.accountService.getById(id).subscribe(response=>{
      this.myUser = response;
    })
  }
}
