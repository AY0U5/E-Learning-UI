import {Component, OnInit} from '@angular/core';
import {FreeTrialformuleAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialformuleAdmin.service';
import {FreeTrialformuleDto} from 'src/app/shared/model/freetrial/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialformuleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {InscriptionDto} from 'src/app/shared/model/grpe/Inscription.model';
import {InscriptionAdminService} from 'src/app/shared/service/admin/grpe/InscriptionAdmin.service';


@Component({
  selector: 'app-free-trialformule-list-admin',
  templateUrl: './free-trialformule-list-admin.component.html'
})
export class FreeTrialformuleListAdminComponent extends AbstractListController<FreeTrialformuleDto, FreeTrialformuleCriteria, FreeTrialformuleAdminService>  implements OnInit {

    override fileName = 'FreeTrialformule';


     yesOrNoStatus: any[] = [];
    inscriptions: Array<InscriptionDto>;


    constructor( private freeTrialformuleService: FreeTrialformuleAdminService  , private inscriptionService: InscriptionAdminService) {
        super(freeTrialformuleService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FreeTrialformule').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadInscription();
                this.yesOrNoStatus =  [{label: 'Status', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'inscription?.id', header: 'Inscription'},
            {field: 'dayspeerweek', header: 'Dayspeerweek'},
            {field: 'timeperday', header: 'Timeperday'},
            {field: 'teacherGenderoption', header: 'Teacher genderoption'},
            {field: 'teacherAgeRange', header: 'Teacher age range'},
            {field: 'teacherPersonnality', header: 'Teacher personnality'},
            {field: 'status', header: 'Status'},
            {field: 'dateConfirmation', header: 'Date confirmation'},
        ];
    }


    public async loadInscription(){
       this.inscriptionService.findAll().subscribe(inscriptions => this.inscriptions = inscriptions, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Inscription': e.inscription?.id ,
                 'Dayspeerweek': e.dayspeerweek ,
                 'Timeperday': e.timeperday ,
                 'Teacher genderoption': e.teacherGenderoption ,
                 'Teacher age range': e.teacherAgeRange ,
                 'Teacher personnality': e.teacherPersonnality ,
                'Status': e.status? 'Vrai' : 'Faux' ,
                'Date confirmation': this.datePipe.transform(e.dateConfirmation , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Inscription': this.criteria.inscription?.id ? this.criteria.inscription?.id : environment.emptyForExport ,
            'Dayspeerweek': this.criteria.dayspeerweek ? this.criteria.dayspeerweek : environment.emptyForExport ,
            'Timeperday': this.criteria.timeperday ? this.criteria.timeperday : environment.emptyForExport ,
            'Teacher genderoption': this.criteria.teacherGenderoption ? this.criteria.teacherGenderoption : environment.emptyForExport ,
            'Teacher age range': this.criteria.teacherAgeRange ? this.criteria.teacherAgeRange : environment.emptyForExport ,
            'Teacher personnality': this.criteria.teacherPersonnality ? this.criteria.teacherPersonnality : environment.emptyForExport ,
            'Status': this.criteria.status ? (this.criteria.status ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date confirmation Min': this.criteria.dateConfirmationFrom ? this.datePipe.transform(this.criteria.dateConfirmationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date confirmation Max': this.criteria.dateConfirmationTo ? this.datePipe.transform(this.criteria.dateConfirmationTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
