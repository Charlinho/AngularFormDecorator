import { FormName } from './decorators/decorator';
import { Validator } from './validators/validators-const';

export class UserModel {
  
  @FormName([Validator.REQUIRED, Validator.MINLENGTH(5)])
  name: string;

  @FormName([Validator.REQUIRED, Validator.EMAIL])
  email: string;

  @FormName()
  lastName: string;
}