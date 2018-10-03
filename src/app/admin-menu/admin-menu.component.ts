import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  @Input() showMenu: boolean = false;
  @Input() selectedTab: string = 'MyThings';
  @Output() selectNewTab = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectTab(tabName: string) {

    if (this.selectedTab != tabName) {
      window.scrollTo(0, 0);
    }

    this.selectedTab = tabName;
    this.selectNewTab.emit(this.selectedTab);

  }

}
