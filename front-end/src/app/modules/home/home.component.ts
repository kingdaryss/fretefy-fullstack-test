import { Component, OnInit } from '@angular/core';

export interface IListaRegioes {
  id: number;
  nome: string;
  cidades?: IListaRegioes[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome'];
  dataSource: IListaRegioes[] = [
    {id: 1, nome: 'Nordeste', cidades: [{id: 10, nome: 'Bahia'}]},
    {id: 2, nome: 'Noroeste', cidades: []},
    {id: 3, nome: 'Norte', cidades: []},
    {id: 4, nome: 'Oeste', cidades: [] },
    {id: 5, nome: 'Leste', cidades: []},
    {id: 6, nome: 'Sudeste', cidades: []},
    {id: 7, nome: 'Sul', cidades: [{id: 9, nome: 'Curitiba'}]},
    {id: 8, nome: 'Sudoeste', cidades: []},
  ];

  constructor() { }

  ngOnInit() {
  }

  onCloneIconClick() {
    console.log('1');
  }

}
