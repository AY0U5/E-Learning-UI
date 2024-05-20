import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseCriteria} from 'src/app/shared/criteria/quiz/ReponseCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {QuestionDto} from "../../../model/quiz/Question.model";


@Injectable({
  providedIn: 'root'
})
export class ReponseAdminService extends AbstractService<ReponseDto, ReponseCriteria> {

    private _reponseCourte : boolean = false ;
    private _paragraphe : boolean = false ;
    private _caseAcoche : boolean = false ;
    private _choixMultiple : boolean = false ;
    private _reponsenbr : number = 1 ;
    private _showreponsenbr : boolean = false ;
    private _itemsRepForQuest: Array<ReponseDto>;



    public set itemsRepForQuest(value: Array<ReponseDto>) {
        this._itemsRepForQuest = value;
    }

    public get itemsRepForQuest(): Array<ReponseDto> {
        if (this._itemsRepForQuest == null) {
            this._itemsRepForQuest = new Array<ReponseDto>();
        }
        return this._itemsRepForQuest;
    }


    get showreponsenbr(): boolean {
        return this._showreponsenbr;
    }

    set showreponsenbr(value: boolean) {
        this._showreponsenbr = value;
    }

    get reponsenbr(): number {
        return this._reponsenbr;
    }

    set reponsenbr(value: number) {
        this._reponsenbr = value;
    }

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
    //
    public findBylib(item: ReponseDto): Observable<ReponseDto> {
        return this.http.get<ReponseDto>(this.API + 'lib/' + item.lib   );
    }
    //

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
