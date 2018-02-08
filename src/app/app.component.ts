import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserModel } from './user-model';
import { FormDecorator } from './decorators/decorator';

@FormDecorator()
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  formGroup: FormGroup;
  user: UserModel;

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({});
    this.user = new UserModel();
  }

  onSendClick(): void {
    console.log(this.formGroup);
  }
}
