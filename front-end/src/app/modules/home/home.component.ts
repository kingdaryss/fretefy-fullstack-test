import { Component, OnInit } from '@angular/core';
import { Regiao } from 'src/app/shared/models/regiao.model';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource$: Observable<Regiao[]>;
  constructor(private homeService: HomeService) { }
  refresh(): void { this.dataSource$ = this.homeService.all() }
  update(item: any, status: boolean): void {
    this.homeService.get(item.name).subscribe((response: Regiao) => {
      let responseItem = {...response}
      responseItem.status = status;
      this.homeService.update(responseItem).subscribe(() => this.refresh() );
    })
  }
  ngOnInit(): void  { this.refresh(); }
}
