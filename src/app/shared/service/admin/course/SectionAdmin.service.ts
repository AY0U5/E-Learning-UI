import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionCriteria} from 'src/app/shared/criteria/course/SectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
// import * as http from "http";


@Injectable({
  providedIn: 'root'
})
export class SectionAdminService extends AbstractService<SectionDto, SectionCriteria> {
    private _htmlEditor:string
    private _itemtoedit: SectionDto;
    public httpeditor: HttpClient;
   public get itemtoedit(): SectionDto {
       if (this._itemtoedit == null) {
           this._itemtoedit = this.constrcutDto();
           //TODO : this._item = new DTO();
       }
       return this._itemtoedit;
    }
    public edithtmleditor(dto : SectionDto): Observable<SectionDto> {
        return this.httpeditor.put<SectionDto>(this.API,dto );
    }
    public set itemtoedit(value: SectionDto) {
        this._itemtoedit = value;
    }
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
