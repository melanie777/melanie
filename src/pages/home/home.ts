import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable }        from 'rxjs/Observable';

import { Todo } from '../../shared/Todo';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  queaseress: Todo[] = [
    {
      description:"lavar los platos",
      done: true
    },
    {
      description:"trapear la sala",
      done: true
    },
    {
    description:"barrer",
    done: true
  },
  {
  description:"trabajar",
  done: true
}
  ];

  quehacer: todo = {
   description: "lavar los platos",
   done: true
 };

   quehacer2: todo = {
    description: "trapear la sala ",
    done: false
  };

    quehacer3: todo = {
     description: "leer",
     done: true
};

     quehacer4: todo = {
      description: "desayunar ",
      done: false
  };


  buttons = [
    {
      type: 'done',
      class: ''
    }, {
      type: 'pending',
      class: ''
    }, {
      type: 'all',
      class: ''
    }
  ];

  constructor(
    public navCtrl: NavController,
    private todoService: TodoService) {}

  ngOnInit() {
    // codigo al iniciar el componente
  }

  addTodo(todo: string) {
    // codigo para agregar TODO
  }

  updateTodo(todo: any) {
    // codigo para actualizar TODO
  }

  showDone() {
    // mostrar los TODOs terminados
  }

  showPending() {
    // mostrar los TODOs pendientes
  }

  showAll() {
    // mostrar todos los TODOs
  }

  private remapButtons(type: string) {
    return this.buttons.map(b => {
      if (b.type === type) {
        b.class = 'button-large-md';
      } else {
        b.class = '';
      }
      return b;
    });
  }

  buttonClass(type: string) {
    return this.buttons.filter(b => b.type === type)[0].class;
  }

}
