import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Adrian';
  genero: string = 'm';

  invitacionMap = {
    'm': 'invitarlo',
    'f': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Adrian'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    if (this.nombre === 'Adrian') {
      this.nombre = 'Susana';
      this.genero = 'f';
    } else {
      this.nombre = 'Adrian';
      this.genero = 'm';
    }  
  }

  borrarCliente(){
    if (this.clientes.length == 0) {
      return;
    }
    this.clientes.pop();
  }
}
