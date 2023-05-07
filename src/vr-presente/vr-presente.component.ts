import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vr-presente',
  standalone: true,
  templateUrl: './vr-presente.component.html',
  styleUrls: ['./vr-presente.component.css'],
  imports: [FormsModule],
})
export class VrPresenteComponent implements OnInit {
  vp: number;
  j: number;
  p: number;
  vf: number;

  constructor() {
    this.vp = 0;
    this.j = 0;
    this.p = 0;
    this.vf = 0;
  }

  calcularValorFinal() {
    let vfAux = this.vp * Math.pow(this.j / 100 + 1, this.p);
    this.vf = Math.round(vfAux * 100) / 100;
  }

  ngOnInit() {}
}
