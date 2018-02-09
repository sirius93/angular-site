import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { AccordionModule } from 'angularx-accordion';
import { AccordionContainerComponent } from './accordion-container/accordion-container.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { TitleComponent } from './title/title.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { EducationContentComponent } from './education-content/education-content.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
@NgModule({
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports: [
    NavigationComponent,
    HeroBannerComponent,
    AccordionContainerComponent,
    ExperienceCardComponent,
    TitleComponent,
    ProgressBarsComponent,
    ProjectCardComponent,
    EducationContentComponent,
    FooterComponent,
    ContactMeComponent
  ],
  declarations: [NavigationComponent, HeroBannerComponent, AccordionContainerComponent, ExperienceCardComponent, TitleComponent,
    ProgressBarsComponent,
    ProjectCardComponent,
    EducationContentComponent,
    FooterComponent,
    ContactMeComponent]
})
export class ComponentsModule { }
