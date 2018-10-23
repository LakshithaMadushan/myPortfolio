import {Component} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {AngularFirestore} from "angularfire2/firestore";
import {ArticleBody} from "./object-models/article";
import {AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs/index";

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

  adminMode: boolean = false;

  showMenu: boolean = false;
  isPageLoading: boolean = true;
  selectedTab: string = 'MyThings';
  adminMenuSelectedTab: string = 'Insert';

  paginationStart: number = 1;
  paginationEnd: number = 5;

  articleCollection: Array<ArticleBody> = [];
  articleCollectionFB: AngularFirestoreCollection<ArticleBody>;
  article: Observable<ArticleBody[]>;
  numberOfArticles: number;

  constructor(private fireStore: AngularFirestore) {
    this.articleCollectionFB = fireStore.collection('articles', ref => {
      return ref.orderBy('articleNumber');
    });
    this.article = this.articleCollectionFB.valueChanges();

    this.article.subscribe((res) => {
      this.articleCollection = res;
      this.numberOfArticles = res.length;
    });

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

  adminLogin(event) {
    if (event == 5) {
      console.log('%c Admin Mode Toggled', 'color: #e67e22; font-weight: bold;');
      if (!this.adminMode) {
        AdminLoginComponent.adminLogin = true;
      } else {
        this.adminMode = false;
      }
    }
  }

  goAdminFlow() {
    this.adminMode = !(this.adminMode);
    this.resetAdminMenuSelectedTab();
    window.scrollTo(0, 0);
  }

  resetAdminMenuSelectedTab() {
    this.adminMenuSelectedTab = 'Insert';
  }
}
