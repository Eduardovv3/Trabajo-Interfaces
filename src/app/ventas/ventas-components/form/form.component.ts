import { Component, OnInit } from '@angular/core';
import {form,forms} from './form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  forms:form[];

  constructor() { 

    this.forms=forms;
  }

  ngOnInit(): void {
  }

}
