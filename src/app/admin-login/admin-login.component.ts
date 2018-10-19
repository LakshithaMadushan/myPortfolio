import {Component, OnInit} from '@angular/core';
import {ToastComponent} from "../toast/toast.component";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  static adminLogin: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  get staticAdminLogin() {
    return AdminLoginComponent.adminLogin;
  }
}
