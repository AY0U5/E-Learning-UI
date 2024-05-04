import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionCriteria} from 'src/app/shared/criteria/course/SectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SectionAdminService extends AbstractService<SectionDto, SectionCriteria> {
    private _htmlEditor:string


    get htmlEditor(): string {
        return this._htmlEditor;
    }

    set htmlEditor(value: string) {
        this._htmlEditor = value;
    }

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): SectionDto {
        return new SectionDto();
    }

    public constrcutCriteria(): SectionCriteria {
        return new SectionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/section/';
    }

    private _itemseditorSec : Array<SectionDto> ;
    public get itemseditorSec(): Array<SectionDto> {
        if (this._itemseditorSec == null) {
            this._itemseditorSec = new Array<SectionDto>();
        }
        return this._itemseditorSec;
    }

    public set itemseditorSec(value: Array<SectionDto>) {
        this._itemseditorSec = value;
    }
}
