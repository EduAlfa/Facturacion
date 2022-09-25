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
  nit: string = "";
  nombre: string = "";
  direccion: string = "";
  mail: string = "";
  producto: string = "";
  total: number = 0;
  result = {
    nombre: this.nombre,
    NIT: this.nit,
    telefono: this.tel,
    email: this.mail,
    direccion: this.direccion,
    phone: this.tel,
    producto: this.producto,
    price: this.precio,
    cantidad: this.cantidad,
    total: this.total,
  };
  @Output()
  emisor = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  calcular(operacion: string) {
    
    this.emisor.emit(this.result);
  }
  
  
}
  
