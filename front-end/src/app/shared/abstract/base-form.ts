import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { Entity } from "../models/entity.model";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { CrudService } from "../services/crud.service";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFormComponent<T extends Entity> implements OnInit, OnDestroy {
  public id: string = '';
  protected subscriptionParamMap: Subscription;
  protected subscription: Subscription;
  public formGroup: FormGroup;
  constructor(
    protected activatedRoute: ActivatedRoute,
    protected formBuilder: FormBuilder,
    protected entityService: CrudService<Entity>,
    protected router: Router) {}
  ngOnInit(): void { this.subscriptionParamMap = this.activatedRoute.paramMap.subscribe((queryParams: ParamMap) => this.routeChanged(queryParams)); }
  ngOnDestroy(): void { this.subscriptionParamMap?.unsubscribe(); this.subscription?.unsubscribe(); }
  protected routeChanged(queryParams: ParamMap): void {
    this.id = queryParams.get('id');
    if (this.id) {
      this.subscription = this.entityService.get(this.id).subscribe((response: T) => this.createFormGroup(response));
    } else {
      this.createFormGroup();
    }
  }
  protected abstract createFormGroup(response?: T): void;
  protected saveEntity(callback: Function): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      const saveAction = this.id ? this.entityService.update(this.formGroup.value) : this.entityService.create(this.formGroup.value);
      saveAction.subscribe((response: T) => callback(response));
    }
  }
}
