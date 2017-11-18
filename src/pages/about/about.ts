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
    dato2: any = {
    origen: "ayacucho peru",
    numero: "968314292",
    email: "meli_sadey@hotail.com"



    

  };
  constructor(public navCtrl: NavController) {

  }

}
