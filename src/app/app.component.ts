import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showMenu: boolean = false;
  isPageLoading: boolean = true;
  selectedTab: string = 'MyThings';


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

  currentPageNumber(pageNumber){
    console.log(pageNumber);
  }

}
