import {Component, Input, OnInit} from '@angular/core';
import {ToastComponent} from "../toast/toast.component";
import {ReplaySubject} from "rxjs/index";

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
  @Input() spinner_inputValue: number;
  @Input() spinner_minValue: number;
  @Input() spinner_maxValue: number;

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
    // console.log(this.articleName);
    // console.log(this.articleDate);
    // console.log(this.articleDescription);

    ToastComponent.toast = true;
    ToastComponent.on_off_btn = true;

    ToastComponent.reset();
    ToastComponent.btnResponse.subscribe({
      next: (res) => {
        if (res == 'Yes') {
          console.log("Yes Clicked!");
        }
        if (res == 'No') {
          console.log("No Clicked!");
        }
        if (res == 'Ok') {
          console.log("Ok Clicked!");
        }
      },
      error: (err) => console.log('observerB: ' + err),
    });

  }

}
