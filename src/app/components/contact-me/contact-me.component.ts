import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  @Input() data: any;
  public social;
  constructor() { }

  ngOnInit() {
    if (this.data) {
      this.social = [];
      for (let key in this.data.links) {
        if (key) {
          this.social.push(this.data.links[key]);
        }
      }
    }
  }

}
