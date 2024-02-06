import { Component } from '@angular/core';
import { Product, TopSelling, TableRows, Employee } from './marcas-data';


@Component({
  selector: 'tabla-marcas',
  templateUrl: 'marcas.html'
})
export class MarcasComponent {
  topSelling: Product[];

  trow: TableRows[];

  constructor() {

    this.topSelling = TopSelling;

    this.trow = Employee;
  }
}
