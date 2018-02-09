import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {ComponentsModule} from '../components/components.module';
import { AccordionModule } from 'angularx-accordion';
import { ParticlesModule } from 'angular-particle';
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AccordionModule,
    ParticlesModule
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent]
})
export class PagesModule { }
