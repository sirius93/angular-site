import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education-content',
  templateUrl: './education-content.component.html',
  styleUrls: ['./education-content.component.scss']
})
export class EducationContentComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
