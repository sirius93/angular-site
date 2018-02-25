import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ComponentsModule} from './components/components.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'angularx-accordion';
import { ParticlesModule } from 'angular-particle';
import { PagesModule  } from './pages/pages.module';
import { firebaseConfig } from '../environments/firebase-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AccordionModule,
    ParticlesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
