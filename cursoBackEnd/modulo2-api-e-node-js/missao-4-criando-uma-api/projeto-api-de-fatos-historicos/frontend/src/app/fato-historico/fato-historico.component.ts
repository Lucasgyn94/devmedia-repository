import { Component, OnInit } from '@angular/core';
import { FatosHistoricosService } from '../services/fatos-historicos.service';

@Component({
  selector: 'app-fato-historico',
  templateUrl: './fato-historico.component.html',
  styleUrls: ['./fato-historico.component.css']
})
export class FatoHistoricoComponent {

  ano: String = '';
  fato: String = '';
  error: String = '';

  constructor(private fatoHistoricoService: FatosHistoricosService) { }

  buscarFato() {
    this.fatoHistoricoService.getFatoPorAno(this.ano).subscribe(
      (data) => {
        this.fato = data.fato;
        this.error = ''
      },
      (err) => {
        this.error = err.error.error;
        this.fato = '';
      })
  }

}
