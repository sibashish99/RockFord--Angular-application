import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ContactComponent } from './contact/contact.component';
import { AdmissionComponent } from './admission/admission.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    FacultyComponent,
    ContactComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
