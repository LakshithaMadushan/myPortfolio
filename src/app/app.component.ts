import {Component} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(200)
      ])
    ]),
  ]
})
export class AppComponent {

  showMenu: boolean = false;
  isPageLoading: boolean = true;
  selectedTab: string = 'MyThings';
  adminMenuSelectedTab: string = 'Insert';

  paginationStart: number = 1;
  paginationEnd: number = 5;

  constructor() {
    setTimeout(() => {
      this.isPageLoading = false;
    }, 3000);
  }

  clickMobileMenubtn(event) {
    this.showMenu = event;
  }

  changeContent(selectedTab) {
    this.selectedTab = selectedTab;
  }

  adminMenuChangeContent(adminMenuSelectedTab) {
    this.adminMenuSelectedTab = adminMenuSelectedTab;
  }

  currentPageNumber(pageNumber) {
    console.log(pageNumber);
  }

}
