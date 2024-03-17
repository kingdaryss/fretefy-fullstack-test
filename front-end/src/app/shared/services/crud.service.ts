import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entidade } from '../models/entidade.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService<A extends Entidade> {
  public endpoint: string = '';
  private readonly apiUrl = environment.API;
  constructor(private http: HttpClient) { }

  listar(): Observable<A[]> {
    return this.http.get<A[]>(`${this.apiUrl}/${this.endpoint}`);
  }

  pegar(id: number | string): Observable<A> {
    return this.http.get<A>(`${this.apiUrl}/${this.endpoint}/${id}`);
  }

  cadastrar(item: A): Observable<A> {
    return this.http.post<A>(`${this.apiUrl}/${this.endpoint}`, item);
  }

  atualizar(item: A): Observable<A> {
    return this.http.put<A>(`${this.apiUrl}/${this.endpoint}/${item.id}`, item);
  }

  deletar(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${this.endpoint}/${id}`);
  }
}
