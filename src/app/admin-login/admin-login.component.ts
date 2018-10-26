import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth-service/auth.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  @Output() goAdminFlow = new EventEmitter<boolean>();

  static adminLogin: boolean = false;
  adminUserName: string;
  adminPassword: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  get staticAdminLogin() {
    return AdminLoginComponent.adminLogin;
  }

  clickGo() {
    AdminLoginComponent.adminLogin = false;
    if (this.adminUserName && this.adminPassword) {
      this.authService.emailLogin(this.adminUserName, this.adminPassword);
      if (this.authService.loginSuccess) {
        this.goAdminFlow.emit(true);
      }
    }
  }

}
