import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario:Usuario = new Usuario();

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}