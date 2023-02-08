import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Adrian Pineda';
  valor: number = 1000;
  obj = {
    nombre: this.nombre
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
    
  }
  

}

