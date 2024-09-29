import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  mensagemDoDia: string = '';
  dia: number = 0;

  constructor(private mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.mensagemService.getMensagemDoDia().subscribe(dados => {
      this.mensagemDoDia = dados.mensagem;
      this.dia = dados.dia;
    });
  }


}
