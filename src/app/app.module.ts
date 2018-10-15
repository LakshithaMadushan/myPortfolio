import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastComponent } from './toast/toast.component';
import { ArticleSkeletonComponent } from './article-skeleton/article-skeleton.component';
import { FileSizePipePipe } from './custom-pipes/file-size-pipe.pipe';
import { DropZoneDirectiveDirective } from './custom-directives/drop-zone-directive.directive';

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
    AdminMenuComponent,
    SpinnerComponent,
    ToastComponent,
    ArticleSkeletonComponent,
    FileSizePipePipe,
    DropZoneDirectiveDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
