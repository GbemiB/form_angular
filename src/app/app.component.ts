import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  message!: string;
  loginForm = new FormGroup({
    email: new FormControl(' '),
    password: new FormControl(' ')
});
onSubmit(){
  this.message = 'Successful';
}
}
