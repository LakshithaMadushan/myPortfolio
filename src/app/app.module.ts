import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { LoaderComponent } from './loader/loader.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { MenuComponent } from './menu/menu.component';
import { PageinationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewArticleComponent } from './add-new-article/add-new-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleContainerComponent,
    LoaderComponent,
    MobileMenuComponent,
    MenuComponent,
    PageinationComponent,
    FooterComponent,
    AboutMeComponent,
    AddNewArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
