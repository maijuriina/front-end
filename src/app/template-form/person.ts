export class Person {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  username: string;
  password: string;
  confirmPw: string;
  termsAndConditions: boolean;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.id = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.confirmPw = '';
    this.termsAndConditions = false;
  }
}
