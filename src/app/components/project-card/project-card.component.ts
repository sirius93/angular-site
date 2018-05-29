import { Component, OnInit, Input } from '@angular/core';
import { IteratorPipe } from '../../pipes/iterator.pipe';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
