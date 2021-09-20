import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/Profile'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
})
export class TemplateFormComponent implements OnInit {
  model!: Profile;  
  powers!: string[];
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
      this.model = new Profile('Taiwo', 'Bello', 'Software Engineer', 'Lagos', 'Nigeria', 'Ibeju-Lekki', 'Single', 
                               'bellotaiwo@gmail.com');

                               this.powers = ['Really Smart', 'Turbulent Breeze', 
                               'Super Hot', 'Weather Changer'];
            }
          

  onSubmit() {
    this.submitted = true;
  }
}