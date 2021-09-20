import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter-template-form',
  templateUrl: './starter-template-form.component.html',
})
export class StarterTemplateFormComponent implements OnInit {
  customer: any;
  message!: string;

  constructor() { }

  ngOnInit() { 
    this.customer = {
        customerID: 2345667,
        firstName: 'Gbemisola',
        lastName: 'Bello',
        country: 'Nigeria'
    };
  }

  onSubmit(){
    this.message = 'Successful';
  }

}