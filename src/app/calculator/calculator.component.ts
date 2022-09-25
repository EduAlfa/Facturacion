import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  precio: number = 0;
  cantidad: number = 0;
  tel: number = 0;
  result: number = 0;
  nit: string = "";
  nombre: string = "";
  direccion: string = "";
  mail: string = "";
  producto: string = "";
  @Output()
  emisor = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  calcular(operacion: string) {
    
    this.emisor.emit(this.result);
  }
}
