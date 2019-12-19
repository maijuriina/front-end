import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormGroupDirective} from '@angular/forms';

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPwd').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirmPwd').setErrors( {MatchPassword: true} );
    } else {
      return null;
    }
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[A-Öa-ö ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[A-Öa-ö ]*')]],
      idNumber: ['', [Validators.required,
        Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\\+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{10,}')]],
        termsAndConditions: ['', Validators.required],
      confirmPwd: ['', [Validators.required]]},
    { validator: PasswordValidation.MatchPassword });
    }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get idNumber() {
    return this.profileForm.get('idNumber');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get username() {
    return this.profileForm.get('username');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get confirmPwd() {
    return this.profileForm.get('confirmPwd');
  }

  get termsAndConditions() {
    return this.profileForm.get('termsAndConditions');
  }

  onSubmit() {
    console.log('Form sent!');
    console.log(this.profileForm.value.firstName);
  }
}
