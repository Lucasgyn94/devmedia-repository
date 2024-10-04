import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FatosHistoricosService {

  private apiURL = 'http://localhost:3000/fatos'
  constructor(private httpClient: HttpClient) { }

  getFatoPorAno(ano: String): Observable<any> {
    return this.httpClient.get(`${this.apiURL}?ano=${ano}`);
  }


}
