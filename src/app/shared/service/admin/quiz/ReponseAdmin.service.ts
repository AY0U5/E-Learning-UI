import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseCriteria} from 'src/app/shared/criteria/quiz/ReponseCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
// import * as http from "http";


@Injectable({
  providedIn: 'root'
})
export class ReponseAdminService extends AbstractService<ReponseDto, ReponseCriteria> {

    private _reponseCourte : boolean = false ;
    private _paragraphe : boolean = false ;
    private _caseAcoche : boolean = false ;
    private _choixMultiple : boolean = false ;

    get reponseCourte(): boolean {
        return this._reponseCourte;
    }
    set reponseCourte(value: boolean) {
        this._reponseCourte = value;
    }
    get paragraphe(): boolean {
        return this._paragraphe;
    }

    set paragraphe(value: boolean) {
        this._paragraphe = value;
    }

    get caseAcoche(): boolean {
        return this._caseAcoche;
    }

    set caseAcoche(value: boolean) {
        this._caseAcoche = value;
    }

    get choixMultiple(): boolean {
        return this._choixMultiple;
    }

    set choixMultiple(value: boolean) {
        this._choixMultiple = value;
    }

     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ReponseDto {
        return new ReponseDto();
    }

    public constrcutCriteria(): ReponseCriteria {
        return new ReponseCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/reponse/';
    }
}
