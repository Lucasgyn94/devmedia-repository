import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  grauTemperatura: number;
  tipoTemperatura: string = 'C';
  temperaturaFixa: string = 'F'; // Nova propriedade
  temperaturaConvertida: number | null = null;
  historico: number[] = [];

  constructor(private conversorService: ConversorService) {
    this.grauTemperatura = 0;
   }

  ngOnInit() {
    this.carregarHistorico();
  }

  converter() {
    this.conversorService.converterTemperatura(this.grauTemperatura, this.tipoTemperatura)
      .subscribe(
        (response) => {
          this.temperaturaConvertida = response.temperatura;
          this.carregarHistorico();
        },
        (error) => {
          console.error('Erro ao converter temperatura:', error);
        }
      );
  }

  carregarHistorico() {
    this.conversorService.getHistorico()
      .subscribe(
        (response) => {
          this.historico = response.temperaturas;
        },
        (error) => {
          console.error('Erro ao carregar histórico:', error);
        }
      );
  }

  // Novo método para atualizar a temperatura fixa
  atualizarTemperaturaFixa() {
    this.temperaturaFixa = this.tipoTemperatura === 'C' ? 'F' : 'C';
  }
}
