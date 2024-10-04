import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatoHistoricoComponent } from './fato-historico/fato-historico.component';

const routes: Routes = [
  {path: '', component: FatoHistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
