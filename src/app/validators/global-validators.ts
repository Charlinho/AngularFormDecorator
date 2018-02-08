import { FormControl } from '@angular/forms';

interface ValidationResult {
  [key: string]: boolean;
}

export class GlobalValidators {

  static email(control: FormControl): ValidationResult {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (control.value !== '' && !EMAIL_REGEX.test(control.value)) {
      return { "incorrectMailFormat": true };
    }

    return null;
  }
}