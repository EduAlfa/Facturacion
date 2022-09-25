import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  constructor() {}

  @Input() result: any = {
    name: 'string',
    NIT: 0,
    address: 'string',
    email: 'string',
    date: 'string',
    phone: 0,
  };
  ngOnInit(): void {}
}
