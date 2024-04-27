import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TeacherLocalityAdminService} from 'src/app/shared/service/admin/inscriptionref/TeacherLocalityAdmin.service';
import {TeacherLocalityDto} from 'src/app/shared/model/inscriptionref/TeacherLocality.model';
import {TeacherLocalityCriteria} from 'src/app/shared/criteria/inscriptionref/TeacherLocalityCriteria.model';



@Component({
  selector: 'app-teacher-locality-edit-admin',
  templateUrl: './teacher-locality-edit-admin.component.html'
})
export class TeacherLocalityEditAdminComponent extends AbstractEditController<TeacherLocalityDto, TeacherLocalityCriteria, TeacherLocalityAdminService>   implements OnInit {


    private _validTeacherLocalityCode = true;
    private _validTeacherLocalityLibelle = true;




    constructor( private teacherLocalityService: TeacherLocalityAdminService ) {
        super(teacherLocalityService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validTeacherLocalityCode = value;
        this.validTeacherLocalityLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTeacherLocalityCode();
        this.validateTeacherLocalityLibelle();
    }
    public validateTeacherLocalityCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTeacherLocalityCode = false;
        } else {
            this.validTeacherLocalityCode = true;
        }
    }
    public validateTeacherLocalityLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTeacherLocalityLibelle = false;
        } else {
            this.validTeacherLocalityLibelle = true;
        }
    }






    get validTeacherLocalityCode(): boolean {
        return this._validTeacherLocalityCode;
    }
    set validTeacherLocalityCode(value: boolean) {
        this._validTeacherLocalityCode = value;
    }
    get validTeacherLocalityLibelle(): boolean {
        return this._validTeacherLocalityLibelle;
    }
    set validTeacherLocalityLibelle(value: boolean) {
        this._validTeacherLocalityLibelle = value;
    }

}
