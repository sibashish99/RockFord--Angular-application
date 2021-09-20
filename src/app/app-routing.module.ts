import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {ProgramsComponent} from './programs/programs.component';
import {FacultyComponent} from './faculty/faculty.component';
import {ContactComponent} from './contact/contact.component';
import {AdmissionComponent} from './admission/admission.component';

const routes: Routes = [
  { path : 'app-newsletter' , component: NewsletterComponent },
  { path : 'app-programs' , component: ProgramsComponent },
  { path : 'app-faculty' , component: FacultyComponent },
  { path : 'app-contact' , component: ContactComponent },
  { path : 'app-admission' , component: AdmissionComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsletterComponent,ProgramsComponent,FacultyComponent,ContactComponent];
