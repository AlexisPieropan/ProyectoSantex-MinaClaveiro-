import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],  
})


export class LoginFormComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  showRecover = false;
  hideLogin = true

  toggle = (() => {
  this.showRecover = !this.showRecover
  this.hideLogin = !this.hideLogin}
  )
}


