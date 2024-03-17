import { Component, OnInit } from '@angular/core';
import { Regiao } from 'src/app/shared/models/regiao.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome'];
  dataSource: Regiao[] = [
    {id: 1, nome: 'Nordeste', status: true, cidades: [{id: 10, status: true, nome: 'Bahia'}]},
    {id: 2, nome: 'Noroeste', status: true, cidades: []},
    {id: 3, nome: 'Norte', status: true, cidades: []},
    {id: 4, nome: 'Oeste', status: true, cidades: [] },
    {id: 5, nome: 'Leste', status: true, cidades: []},
    {id: 6, nome: 'Sudeste', status: true, cidades: []},
    {id: 7, nome: 'Sul', status: true, cidades: [{id: 9, status: true, nome: 'Curitiba'}]},
    {id: 8, nome: 'Sudoeste', status: true, cidades: []},
  ];
  constructor() { }
  ngOnInit(): void  {
  }
  redirectToEditPage(nome): void  {
    console.log(nome)
  }
}
