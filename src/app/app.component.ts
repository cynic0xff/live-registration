import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userprofileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    console.warn(this.userprofileForm.value);
    console.warn(this.userprofileForm.controls['firstName'].value);
  }
}
