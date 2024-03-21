import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IbgeService } from 'src/app/shared/services/ibge.service';
import { uniqueValidator } from 'src/app/shared/validators/duplicates';
import { Regiao } from 'src/app/shared/models/regiao.model';
import { RegiaoService } from './regiao.service';
import { BaseFormComponent } from 'src/app/shared/abstract/base-form';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.scss']
})
export class RegiaoComponent extends BaseFormComponent<Regiao> {
  citys$: Observable<{ id: number; name: string; }[]>;
  constructor(
    private ibgeService: IbgeService, activatedRoute: ActivatedRoute,
    regiaoService: RegiaoService, formBuilder: FormBuilder, router: Router ) {
    super(activatedRoute, formBuilder, regiaoService, router);
    this.citys$ = this.ibgeService.getCitys().pipe(
      map(items => items.map(item => ({ name: item.nome, id: item.nome })))
    );
  }
  protected createFormGroup(response?: Regiao): void {
    this.formGroup = this.formBuilder.group({
      id: [this.id ?? ''],
      status: true,
      name: [response?.name ?? '', Validators.required],
      citys: this.formBuilder.array(
        response?.citys?.length ? response.citys.map(city => this.createCityFormGroup(city)) : [this.createCityFormGroup()],
        [uniqueValidator()]
      )
    });
  }
  get citysFormArray(): FormArray { return this.formGroup.get('citys') as FormArray; }
  addCity(city?: Regiao): void { this.citysFormArray.push(this.createCityFormGroup(city)); }
  removeCity(index: number): void { this.citysFormArray.removeAt(index); }
  createCityFormGroup(city?: Regiao): FormGroup { return this.formBuilder.group({ status: true, name: [city?.name ?? '', Validators.required] }) }
  save(): void { super.saveEntity(() => this.router.navigate(['home'])); }
}
