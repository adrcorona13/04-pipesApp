import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'adrian';
  nombreUpper: string = 'ADRIAN';
  nombreCompleto: string = 'adRiAn CorOna';
}
