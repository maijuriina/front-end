import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  person: Person;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.person = new Person();
  }

  onSubmit(form) {
    console.log(form.value.firstName);
    console.log(form.controls.firstName.status);
    this.router.navigate(['calculator']);
  }
}



