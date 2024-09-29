import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

interface Mensagem {
  dia: number,
  mensagem: string
}

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private apiURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {

   }

   getMensagemDoDia(): Observable<Mensagem> {
    return this.httpClient.get<Mensagem>(this.apiURL)
   }

}
