import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-starter-reactive-form',
  templateUrl: './starter-reactive-form.component.html',

})
export class StarterReactiveFormComponent implements OnInit {
  customerForm!: FormGroup;
  customer: any;
  message!: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { 
      this.customer = {
          firstName: 'Tina',
          lastName: 'Stone',
          height: '6 feet',
          weight: '80kg',
          complexion: 'fair',
          noseType: 'pointed'
      };

      this.customerForm = this.formBuilder.group({
          firstName: [this.customer.firstName, Validators.required ],
          lastName: [this.customer.lastName, Validators.required],
          height: [this.customer.height, Validators.required],
          weight: [this.customer.weight, Validators.required],
          complexion: [this.customer.complexion, Validators.required],
          noseType: [this.customer.noseType, Validators.required],
      });
  }

  onSubmit(form: FormGroup) {
      this.message = 'You typed: ' + form.controls.firstName.value + ' ' + form.controls.lastName.value;
  }

}