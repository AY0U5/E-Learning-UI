import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursCriteria} from 'src/app/shared/criteria/course/ParcoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {CoursDto} from "../../../model/course/Cours.model";
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';
// import * as http from "http";


@Injectable({
  providedIn: 'root'
})
export class ParcoursAdminService extends AbstractService<ParcoursDto, ParcoursCriteria> {
    //add
    private _itemParcour: ParcoursDto;
    public get itemParcour(): ParcoursDto {
        if (this._itemParcour == null) {
            this._itemParcour = this.constrcutDto();
            //TODO : this._item = new DTO();
        }
        return this._itemParcour;
    }
    public set itemParcour(value: ParcoursDto) {
        this._itemParcour = value;
    }
    get viewcoursOk(): boolean {
        return this._viewcoursOk;
    }
    set viewcoursOk(value: boolean) {
        this._viewcoursOk = value;
    }
    private _viewcoursOk : boolean = false ;


    //


     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ParcoursDto {
        return new ParcoursDto();
    }

    public constrcutCriteria(): ParcoursCriteria {
        return new ParcoursCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/parcours/';
    }
}
