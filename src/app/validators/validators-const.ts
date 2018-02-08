import { Validators } from '@angular/forms';
import { GlobalValidators } from './global-validators';

export const Validator = {
  REQUIRED: Validators.required,
  MAXLENGTH: (length: number) => {
    return Validators.maxLength(length);
  },
  MINLENGTH: (length: number) => {
    return Validators.minLength(length);
  },
  EMAIL: GlobalValidators.email
}