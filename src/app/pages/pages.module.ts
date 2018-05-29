import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomepageComponent } from './homepage/homepage.component';
import {ComponentsModule} from '../components/components.module';
import { AccordionModule } from 'angularx-accordion';
import { ParticlesModule } from 'angular-particle';
import { FirebaseService } from '../services/firebase.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AccordionModule,
    ParticlesModule,
    PipesModule
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
  providers: [FirebaseService]
})
export class PagesModule { }
