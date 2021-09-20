import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/shared/Profile';
import { ValidationService } from 'src/app/shared/validation-service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent implements OnInit {
  profileForm!: FormGroup;
  model!: Profile; 
  submittedModel!: Profile; 
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new Profile('Taiwo', 'Bello', 'Software Engineer', 'Lagos', 'Nigeria', 'Ibeju-Lekki', 'Single', 
      'bellotaiwo@gmail.com');
           
                    
      this.profileForm = this.formBuilder.group({
        firstName:     [this.model.firstName, Validators.required],
        lastName: [this.model.lastName, Validators.required],
        occupation: [this.model.occupation, Validators.required],
        city: [this.model.cityOfResidence, Validators.required],
        country: [this.model.countryOfResidence, Validators.required],
        localGovernemnetOfResidence: [this.model.localGovernmentOfResidence, Validators.required],
        maritalStatus: [this.model.maritalStatus, Validators.required],
         email:    [this.model.email, [Validators.required, ValidationService.emailValidator]],
      });

  }

  onSubmit({ value, valid }: { value: Profile, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}
