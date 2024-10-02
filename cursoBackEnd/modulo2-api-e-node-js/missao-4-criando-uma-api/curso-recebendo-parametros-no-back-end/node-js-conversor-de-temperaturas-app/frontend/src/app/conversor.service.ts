import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
  private apiUrl = 'http://localhost:8080/conversorDeTemperatura';

  constructor(private http: HttpClient) { }

  converterTemperatura(grauTemperatura: number, tipoTemperatura: string): Observable<any> {
    return this.http.post(this.apiUrl, { grauTemperatura, tipoTemperatura });
  }

  getHistorico(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
