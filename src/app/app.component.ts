import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Este es un texto de prueba';
  result: any = {};
  getEvent(e: any) {
    this.result = e;
  }
}
