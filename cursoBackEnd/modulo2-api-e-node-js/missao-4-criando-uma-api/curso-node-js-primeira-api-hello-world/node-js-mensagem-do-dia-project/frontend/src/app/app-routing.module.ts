import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { MensagemComponent } from './mensagem/mensagem.component';

const routes: Routes = [
  {path: '', component: TelaInicialComponent},
  {path: 'mensagem', component: MensagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
