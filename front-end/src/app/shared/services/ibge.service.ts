import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private readonly apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades'
  constructor(private http: HttpClient) { }

  getCitys(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/municipios`);
  }
}
