import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  title:string = "Hakkımızda";
  linkedin:string = "www.linkedin.com/in/umut-bozkurt-519274232";
  github:string = "https://github.com/umut221";

  ngOnInit(): void {
  }

}
