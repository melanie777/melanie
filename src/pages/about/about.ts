import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

   nombre: string = "melanie Cruz";
   ocupacion: string ="estudiante";
  edad: number = 16;
  datos: any = {
   nombre: "sadey cruz",
    ocupacion: "estudiante",
    edad: 16
  };

  informacion: any[]= [
    {
      titulo: "origen",
      dato: "lima, Peru",
      icono: "flag"
    },
    {
     titulo: "telefono",
     dato: "968314292",
     icono: "call"
   },
    {
      titulo: "coreo",
       dato: "meli_sadey@hotail.com",
       icono: "mail"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
