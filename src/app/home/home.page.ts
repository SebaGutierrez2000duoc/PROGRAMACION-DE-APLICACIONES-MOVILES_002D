import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre : String;
  clave  : String;



  constructor() {
    this.nombre = "Mario"
    this.clave = "hola123"

  }

}
