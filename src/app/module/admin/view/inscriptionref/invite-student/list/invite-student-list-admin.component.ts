import {Component, OnInit} from '@angular/core';
import {InviteStudentAdminService} from 'src/app/shared/service/admin/inscriptionref/InviteStudentAdmin.service';
import {InviteStudentDto} from 'src/app/shared/model/inscriptionref/InviteStudent.model';
import {InviteStudentCriteria} from 'src/app/shared/criteria/inscriptionref/InviteStudentCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';


@Component({
  selector: 'app-invite-student-list-admin',
  templateUrl: './invite-student-list-admin.component.html'
})
export class InviteStudentListAdminComponent extends AbstractListController<InviteStudentDto, InviteStudentCriteria, InviteStudentAdminService>  implements OnInit {

    override fileName = 'InviteStudent';


     yesOrNoIsAccepted: any[] = [];
     yesOrNoIsPaidPack: any[] = [];
    etudiants: Array<EtudiantDto>;


    constructor( private inviteStudentService: InviteStudentAdminService  , private etudiantService: EtudiantAdminService) {
        super(inviteStudentService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('InviteStudent').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
                this.yesOrNoIsAccepted =  [{label: 'IsAccepted', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoIsPaidPack =  [{label: 'IsPaidPack', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'isAccepted', header: 'Is accepted'},
            {field: 'isPaidPack', header: 'Is paid pack'},
            {field: 'emailInvited', header: 'Email invited'},
            {field: 'dateSentInvitation', header: 'Date sent invitation'},
            {field: 'dateAcceptInvitation', header: 'Date accept invitation'},
            {field: 'datePayPack', header: 'Date pay pack'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Etudiant': e.etudiant?.ref ,
                'Is accepted': e.isAccepted? 'Vrai' : 'Faux' ,
                'Is paid pack': e.isPaidPack? 'Vrai' : 'Faux' ,
                 'Email invited': e.emailInvited ,
                'Date sent invitation': this.datePipe.transform(e.dateSentInvitation , 'dd/MM/yyyy hh:mm'),
                'Date accept invitation': this.datePipe.transform(e.dateAcceptInvitation , 'dd/MM/yyyy hh:mm'),
                'Date pay pack': this.datePipe.transform(e.datePayPack , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
            'Is accepted': this.criteria.isAccepted ? (this.criteria.isAccepted ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Is paid pack': this.criteria.isPaidPack ? (this.criteria.isPaidPack ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Email invited': this.criteria.emailInvited ? this.criteria.emailInvited : environment.emptyForExport ,
            'Date sent invitation Min': this.criteria.dateSentInvitationFrom ? this.datePipe.transform(this.criteria.dateSentInvitationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date sent invitation Max': this.criteria.dateSentInvitationTo ? this.datePipe.transform(this.criteria.dateSentInvitationTo , this.dateFormat) : environment.emptyForExport ,
            'Date accept invitation Min': this.criteria.dateAcceptInvitationFrom ? this.datePipe.transform(this.criteria.dateAcceptInvitationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date accept invitation Max': this.criteria.dateAcceptInvitationTo ? this.datePipe.transform(this.criteria.dateAcceptInvitationTo , this.dateFormat) : environment.emptyForExport ,
            'Date pay pack Min': this.criteria.datePayPackFrom ? this.datePipe.transform(this.criteria.datePayPackFrom , this.dateFormat) : environment.emptyForExport ,
            'Date pay pack Max': this.criteria.datePayPackTo ? this.datePipe.transform(this.criteria.datePayPackTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
