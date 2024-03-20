import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { Animations } from 'src/app/core/animations/animations';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [Animations.fadeOutAnimation]
})
export class LoadingComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private loaderService: LoaderService) { }
  ngOnInit(): void { this.isLoading$ = this.loaderService.isLoading$ }
}
