import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
