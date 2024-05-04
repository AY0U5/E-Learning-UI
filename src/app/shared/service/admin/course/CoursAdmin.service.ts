import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursCriteria} from 'src/app/shared/criteria/course/CoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {ParcoursDto} from "../../../model/course/Parcours.model";
// import * as http from "http";
// import * as http from "http";


@Injectable({
  providedIn: 'root'
})
export class CoursAdminService extends AbstractService<CoursDto, CoursCriteria> {
    //add


    //
    private _itemCour: CoursDto;
    private _itemsCours: Array<CoursDto>;

    public get itemsCours(): Array<CoursDto> {
        if (this._itemsCours == null) {
            this._itemsCours = new Array<CoursDto>();
        }
        return this._itemsCours;
    }

    public set itemsCours(value: Array<CoursDto>) {
        this._itemsCours = value;
    }

    public get itemCour(): CoursDto {
        if (this._itemCour == null) {
            this._itemCour = this.constrcutDto();
            //TODO : this._item = new DTO();
        }
        return this._itemCour;
    }
    public set itemCour(value: CoursDto) {
        this._itemCour = value;
    }



    //

    get viewcoursOk(): boolean {
        return this._viewcoursOk;
    }
    set viewcoursOk(value: boolean) {
        this._viewcoursOk = value;
    }
    private _viewcoursOk : boolean = false ;
    ///////

    public findByParcourId(id : number ) :Observable<Array<CoursDto>>{
        return this.http.get <Array<CoursDto>>(this.API + 'id/' + id);
    }

    //
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CoursDto {
        return new CoursDto();
    }

    public constrcutCriteria(): CoursCriteria {
        return new CoursCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/cours/';
    }
}
