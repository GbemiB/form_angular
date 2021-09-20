import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormsComponent } from './basicForms/basic-forms/basic-forms.component';
import { ReactiveFormComponent } from './reactiveForm/reactive-form/reactive-form.component';
import { StarterReactiveFormComponent } from './starterReactiveForm/starter-reactive-form/starter-reactive-form.component';
import { StarterTemplateFormComponent } from './starterTemplateForm/starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './templateForm/template-form/template-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/startertemplateform'},
  { path: 'startertemplateform', component: StarterTemplateFormComponent},
  { path: 'basicform',  component: BasicFormsComponent },
  { path: 'templateform', component: TemplateFormComponent},
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static componets = [
    BasicFormsComponent
  ]
 }
