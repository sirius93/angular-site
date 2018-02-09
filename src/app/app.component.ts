import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height= 100;

ngOnInit() {
  this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

this.myParams = {
  particles: {
      number: {
          value: 200,
      },
      color: {
          value: '#ff0000'
      },
      shape: {
          type: 'triangle',
      },
  }
};
}
}
