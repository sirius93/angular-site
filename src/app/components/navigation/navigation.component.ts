import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public collapsed;
  public count;
  public flag;
  constructor() { }
  public toggleMenu(): void {
    this.collapsed = !this.collapsed;
    if (this.count === 1) {
      this.count = 0;
    }
    if (this.count > 0) {
      this.flag = false;
    }
    this.count++;
  }
  ngOnInit() {
  }

}
