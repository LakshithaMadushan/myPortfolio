import {Component, OnInit} from '@angular/core';
import {ArticleBody} from '../object-models/article';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.css']
})
export class ArticleContainerComponent implements OnInit {

  articleCollection: Array<ArticleBody> = [];

  constructor() {
    let article = new ArticleBody();

    article.articleName = 'Make a difference today';
    article.articleDate = 'October 9, 2017';
    article.articleDescription = 'Morbi leo enim, laoreet eget urna id, ullamcorper condimentum urna. Curabitur accumsan sem et nisi ultricies porttitor. Aliquam sed nunc elit. Nunc faucibus interdum mauris at mattis. Phasellus congue volutpat porttitor. Vivamus fringilla iaculis ex, et condimentum magna pharetra id. Aliquam erat volutpat. Nam odio velit, egestas vel leo tempus, luctus dapibus mauris.';

    this.articleCollection.push(article);
  }

  ngOnInit() {
  }

}
