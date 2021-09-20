import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
})
export class BasicFormsComponent implements OnInit {
  form: any;
  status!: string[];
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.status = ['Not Started', 'Pending', 
                'Uncompleted', 'Completed'];
  }
onSubmit (form: any) {
  this.submitted = true;
  this.form = form;

  }
}
