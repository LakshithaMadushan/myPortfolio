import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() showMenu: boolean = false;
  @Input() selectedTab: string = 'MyThings';
  @Output() selectNewTab = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectTab(tabName: string) {
    this.selectedTab = tabName;
    this.selectNewTab.emit(this.selectedTab);
    window.scrollTo(0, 0);
  }

}
