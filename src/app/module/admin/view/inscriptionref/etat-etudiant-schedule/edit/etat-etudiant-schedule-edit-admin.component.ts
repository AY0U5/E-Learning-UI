import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EtatEtudiantScheduleAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatEtudiantScheduleAdmin.service';
import {EtatEtudiantScheduleDto} from 'src/app/shared/model/inscriptionref/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/shared/criteria/inscriptionref/EtatEtudiantScheduleCriteria.model';



@Component({
  selector: 'app-etat-etudiant-schedule-edit-admin',
  templateUrl: './etat-etudiant-schedule-edit-admin.component.html'
})
export class EtatEtudiantScheduleEditAdminComponent extends AbstractEditController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleAdminService>   implements OnInit {


    private _validEtatEtudiantScheduleRef = true;




    constructor( private etatEtudiantScheduleService: EtatEtudiantScheduleAdminService ) {
        super(etatEtudiantScheduleService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validEtatEtudiantScheduleRef = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatEtudiantScheduleRef();
    }
    public validateEtatEtudiantScheduleRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validEtatEtudiantScheduleRef = false;
        } else {
            this.validEtatEtudiantScheduleRef = true;
        }
    }






    get validEtatEtudiantScheduleRef(): boolean {
        return this._validEtatEtudiantScheduleRef;
    }
    set validEtatEtudiantScheduleRef(value: boolean) {
        this._validEtatEtudiantScheduleRef = value;
    }

}
