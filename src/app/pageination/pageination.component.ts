import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pageination',
  templateUrl: './pageination.component.html',
  styleUrls: ['./pageination.component.css']
})
export class PageinationComponent implements OnInit {

  @Input() itemArray: any = [1, 2, 3, 4, 5];
  @Output() currentPage: any = new EventEmitter();
  currentSelectedPage: number = 1;

  constructor() {
  }

  ngOnInit() {
  }

  clickArrow(directions) {
    if (directions == 'next') {
      if ((this.itemArray.length) >= (this.currentSelectedPage + 1)) {
        this.currentSelectedPage = this.currentSelectedPage + 1;
      }
    }
    if (directions == 'previous') {
      if (this.currentSelectedPage > 1) {
        this.currentSelectedPage = this.currentSelectedPage - 1;
      }
    }
    this.currentPage.emit(this.currentSelectedPage);
  }

  clickPageNumber(pageNumber) {
    this.currentSelectedPage = pageNumber;
    this.currentPage.emit(this.currentSelectedPage);
  }

}
