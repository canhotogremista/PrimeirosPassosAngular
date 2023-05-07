import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { VrPresenteComponent } from './vr-presente/vr-presente.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, VrPresenteComponent, TemporizadorComponent],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

//let temporizador = new TemporizadorComponent();


