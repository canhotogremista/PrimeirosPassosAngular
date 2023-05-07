import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css'],
  imports: [FormsModule],
})
export class TemporizadorComponent implements OnInit {
  temporizador: any = null;
  tempoDecorrido: number;
  tempoFormatado: string = '';
  status: boolean;

  constructor() {
    this.tempoDecorrido = 0;
    this.status = false;
  }

  iniciar() {
    if (!this.status) {
      this.tempoDecorrido = 0;
      this.status = true;
      this.temporizador = setInterval(() => {
        this.tempoDecorrido++;
      }, 1000);
    }
  }

  continuar() {
    if (!this.status) {
      this.status = true;
      this.temporizador = setInterval(() => {
        this.tempoDecorrido++;
      }, 1000);
    }
  }

  parar() {
    this.status = false;
    clearInterval(this.temporizador);
  }

  exibir() {
    let minutos: number = Math.floor(this.tempoDecorrido / 60);
    let segundos: number = this.tempoDecorrido % 60;
    if (minutos > 0) {
      return minutos + ' min e ' + segundos + ' s';
    } else {
      return segundos + ' s';
    }
  }

  ngOnInit() {}
}
