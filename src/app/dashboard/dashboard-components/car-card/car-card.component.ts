import { Component, OnInit } from '@angular/core';
import {carcard,carcards} from './car-card-data';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html'
})
export class CarCardComponent implements OnInit {

  carcards:carcard[];

  constructor() { 

    this.carcards=carcards;
  }

  ngOnInit(): void {
  }

}
