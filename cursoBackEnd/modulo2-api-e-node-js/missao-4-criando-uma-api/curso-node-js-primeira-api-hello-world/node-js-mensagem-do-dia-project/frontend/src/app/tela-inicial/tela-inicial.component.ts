import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../mensagem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent {

  constructor(private mensagemService: MensagemService, private router: Router) { }

  buscarMensagem(): void {
    this.mensagemService.getMensagemDoDia().subscribe(() => {
      this.router.navigate(['/mensagem'])
    })
  }

}
