import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from 'angularx-accordion';
import {AccordionToggleComponent } from 'angularx-accordion';
import { Accordion } from 'angularx-accordion/accordion';
@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.scss']
})
export class AccordionContainerComponent implements OnInit {

  constructor() { }
  public accordion = {
    'module': {
      'variantID': '1'
    },
    'content': [
      {
        'header': 'H4 copy secondary header 22px',
        'content': 'p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        'header': 'H4 copy secondary header 22px',
        'content': 'p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        'header': 'H4 copy secondary header 22px',
        'content': 'p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
    ]
  };

  ngOnInit() {
  }

}
