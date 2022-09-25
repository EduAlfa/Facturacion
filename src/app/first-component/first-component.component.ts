import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  constructor() {}

  public _total: number = 0;
  public numero1: number = 0;
  public numero2: number = 0;

  test: string = '';

  ngOnInit(): void {}

  saluda(): void {
    console.log('Hola');
  }

  suma(): number {
    return (this._total = this.numero1 + this.numero2);
  }
  getInput(event: any): number {
    this.numero1 = parseInt(event.target.value);
    if (this.numero1 == NaN) {
      this.numero1 = 0;
      return this.numero1;
    }
    return this.numero1;
  }
  getInput2(event: any): number {
    this.numero2 = parseInt(event.target.value);
    if (this.numero2 == NaN) {
      this.numero2 = 0;
      return this.numero2;
    }
    return this.numero2;
  }
}
