import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  @Output() goAdminFlow = new EventEmitter<boolean>();

  static adminLogin: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  get staticAdminLogin() {
    return AdminLoginComponent.adminLogin;
  }

  clickGo(state) {
    AdminLoginComponent.adminLogin = state;
    this.goAdminFlow.emit(true);
  }
}
