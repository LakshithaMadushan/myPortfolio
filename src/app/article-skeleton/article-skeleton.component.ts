import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-skeleton',
  templateUrl: './article-skeleton.component.html',
  styleUrls: ['./article-skeleton.component.css']
})
export class ArticleSkeletonComponent implements OnInit {

  @Input() imageURL: string;  //'../../assets/images/posts/1.jpg'
  @Input() articleName: string;
  @Input() articleDate: string;
  @Input() articleDescription: string;
  @Input() disableInputFields: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  chooseImageFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event) => {
      this.imageURL = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  clickPushButton() {
    console.log(this.articleName);
    console.log(this.articleDate);
    console.log(this.articleDescription);
  }

}
