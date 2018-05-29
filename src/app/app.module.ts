import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ComponentsModule} from './components/components.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'angularx-accordion';
import { ParticlesModule } from 'angular-particle';
import { PagesModule  } from './pages/pages.module';
import { firebaseConfig } from '../environments/firebase-config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AccordionModule,
    ParticlesModule,
    PagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
