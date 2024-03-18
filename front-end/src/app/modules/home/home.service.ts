import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Regiao } from 'src/app/shared/models/regiao.model';
import { CrudService } from 'src/app/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends CrudService<Regiao> {
  endpoint = 'regiao'
  constructor(http: HttpClient) {
    super(http);
  }
}
