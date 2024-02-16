import { Component, OnInit } from '@angular/core';
import { NavBar, navBars } from './navBar-data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navBar.component.html'
})
export class NavBarComponent implements OnInit {

  NavBars:NavBar[];

  constructor() {

    this.NavBars = navBars;
  }

  ngOnInit(): void {
  }

}
