import { FormControl } from '@angular/forms';

let controlValidators = [];

export function FormDecorator() {
    return (...args) => {
      decorateClass(args[0]);
  }
}

export function FormName(validators?) {
   return function (target, key) {
      if (validators) {
        validators.forEach((validator) => {
          controlValidators.push({key: key, validators: validators});
        })    
      } else {
        controlValidators.push({key: key, validators: []});
      }
   }
}


function decorateClass(constructor): void {
  const HOOKS = [
    'ngOnInit'
  ];

  HOOKS.forEach((hook) => {
    const original = constructor.prototype[hook];
    constructor.prototype[hook] = function (args) {
      addControls(this);
    };
  });
}

function addControls(instance): void {
  if (controlValidators.length >= 1) {
      controlValidators.forEach((control) => {
      instance.formGroup.addControl(control.key, new FormControl());
      addValidators(instance, control);
    });
  }
}

function addValidators(instance, control): void {
  if (control.validators) {  
    instance.formGroup.get(control.key).setValidators(control.validators);
  }
}