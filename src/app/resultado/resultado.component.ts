import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  constructor() {}

  @Input() result: number = 0;
  ngOnInit(): void {}
}
