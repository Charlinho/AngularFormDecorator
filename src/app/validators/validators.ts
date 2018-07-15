import { Validators } from '@angular/forms';

export const REQUIRED = Validators.required;

export const MAX_LENGTH = (length: number) => {
  return Validators.maxLength(length);
};

export const MIN_LENGTH = (length: number) => {
  return Validators.maxLength(length);
};
