import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage  implements OnInit{

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
    }, {
      titulo:"hobby",
      dato:"dormir",
      icono: "alarm"

    },{
      titulo:"frase",
      dato:"la vida no tiene sentido si no haces lo que amas",
      icono:"bug"
    }
  ];

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){
  this.agregarDato("mascota","perro","heart");
  this.agregarDato("colegio","rep","person");
  this.agregarDato("cantante favorito","katy perry","flame");

  }

  agregarDato(nuevoTitulo: string, nuevoDato:string,nuevoicon:string) {
    this.informacion.push({
      titulo:nuevoTitulo,
      dato: nuevoDato,
      icono:nuevoicon

    });
  }

}
