import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';

const routes: Routes = [
  {path: '', redirectTo: '/conversorDeTemperatura', pathMatch: 'full'},
  {path: 'conversorDeTemperatura', component: ConversorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
