import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormsComponent } from './basicForms/basic-forms/basic-forms.component';
import { StarterTemplateFormComponent } from './starterTemplateForm/starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './templateForm/template-form/template-form.component';
import { StarterReactiveFormComponent } from './starterReactiveForm/starter-reactive-form/starter-reactive-form.component';
import { ReactiveFormComponent } from './reactiveForm/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicFormsComponent,
    StarterTemplateFormComponent,
    TemplateFormComponent,
    StarterReactiveFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
