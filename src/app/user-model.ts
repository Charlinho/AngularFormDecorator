import { FormName } from './decorators/decorator';
import { REQUIRED, MIN_LENGTH, MAX_LENGTH } from './validators/validators';

export class UserModel {

  @FormName([REQUIRED, MIN_LENGTH(5)])
  name: string;

  @FormName([REQUIRED, MAX_LENGTH(5)])
  email: string;

  @FormName()
  lastName: string;
}
