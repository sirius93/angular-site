import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
