import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entity } from 'src/app/shared/models/entity.model';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CrudService<T extends Entity> {
  public endpoint: string = '';
  private readonly apiUrl = environment.API;
  constructor(private http: HttpClient) { }

  all(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.endpoint}`);
  }

  get(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.endpoint}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.endpoint}`, item);
  }

  update(item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${this.endpoint}/${item.id}`, item);
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${this.endpoint}/${id}`);
  }
}

