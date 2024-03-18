import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RegiaoService } from './regiao.service';
import { Observable, Subscription } from 'rxjs';
import { Regiao } from 'src/app/shared/models/regiao.model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IbgeService } from 'src/app/shared/services/ibge.service';
import { map } from 'rxjs/operators';
import { uniqueValidator } from 'src/app/shared/validators/duplicates';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.scss']
})
export class RegiaoComponent implements OnInit, OnDestroy {
  /*
    TODO Da para melhorar isso, se herdar de uma classe com estrutura genérica para trabalhar com a entidade do FormArrays, então não precisaria implementar todos os métodos nessa classe ou em outras que forem usar a mesma ideia.
  */
  id: string = '';
  subscription: Subscription;
  subscriptionParamMap: Subscription;
  formGroup: FormGroup;
  citys$: Observable<{id: number; name: string;}[]>;

  constructor(
    private ibgeService: IbgeService, private activatedRoute: ActivatedRoute,
    private regiaoService: RegiaoService, private formBuilder: FormBuilder,
    private router: Router) {

    this.citys$ = this.ibgeService.getCitys().pipe(
      map(items => items.map(item => ({ name: item.nome, id: item.nome })))
    );
    this.subscriptionParamMap = this.activatedRoute.paramMap.subscribe((queryParams: ParamMap) => this.routeChanged(queryParams));
  }

  get citysFormArray(): FormArray { return this.formGroup.get('citys') as FormArray; }

  addCity(city?: Regiao): void { this.citysFormArray.push(this.createCityFormGroup(city)); }

  removeCity(index: number): void {
    this.citysFormArray.removeAt(index);
  }

  createFormGroup(response?: Regiao): void {
    this.formGroup = this.formBuilder.group({
      id: [this.id ?? ''],
      status: true,
      name: [response?.name ?? '', Validators.required],
      citys: this.formBuilder.array(response?.citys?.length ? response.citys.map(city => this.createCityFormGroup(city)) : [this.createCityFormGroup()], [uniqueValidator()] )
    });
  }

  createCityFormGroup(city?: Regiao): FormGroup {
    return this.formBuilder.group({
      status: true,
      name: [city?.name ?? '', Validators.required]
    })
  }

  routeChanged(queryParams: ParamMap): void {
    this.id = queryParams.get('id');
    if (this.id) {
      this.subscription = this.regiaoService.get(this.id).subscribe((response: Regiao) => this.createFormGroup(response));
    }
    else {
      this.createFormGroup()
    }
  }

  save(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      if (this.id) {
        this.regiaoService.update(this.formGroup.value).subscribe((response: Regiao) => this.router.navigate(['home']));
      } else {
        this.regiaoService.create(this.formGroup.value).subscribe((response: Regiao) => this.router.navigate(['home']));
      }
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscriptionParamMap?.unsubscribe();
  }
}
