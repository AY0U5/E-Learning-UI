import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {InviteStudentAdminService} from 'src/app/shared/service/admin/inscriptionref/InviteStudentAdmin.service';
import {InviteStudentDto} from 'src/app/shared/model/inscriptionref/InviteStudent.model';
import {InviteStudentCriteria} from 'src/app/shared/criteria/inscriptionref/InviteStudentCriteria.model';


import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';

@Component({
  selector: 'app-invite-student-edit-admin',
  templateUrl: './invite-student-edit-admin.component.html'
})
export class InviteStudentEditAdminComponent extends AbstractEditController<InviteStudentDto, InviteStudentCriteria, InviteStudentAdminService>   implements OnInit {


    private _validInviteStudentCode = true;

    private _validEtudiantRef = true;



    constructor( private inviteStudentService: InviteStudentAdminService , private etudiantService: EtudiantAdminService) {
        super(inviteStudentService);
    }

    ngOnInit(): void {
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    }
    public override prepareEdit() {
        this.item.dateSentInvitation = this.inviteStudentService.format(this.item.dateSentInvitation);
        this.item.dateAcceptInvitation = this.inviteStudentService.format(this.item.dateAcceptInvitation);
        this.item.datePayPack = this.inviteStudentService.format(this.item.datePayPack);
    }



    public override setValidation(value: boolean){
        this.validInviteStudentCode = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateInviteStudentCode();
    }
    public validateInviteStudentCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validInviteStudentCode = false;
        } else {
            this.validInviteStudentCode = true;
        }
    }




   get etudiant(): EtudiantDto {
       return this.etudiantService.item;
   }
  set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
   }
   get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
   }
   set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
   }
   get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
   }
  set createEtudiantDialog(value: boolean) {
       this.etudiantService.createDialog= value;
   }


    get validInviteStudentCode(): boolean {
        return this._validInviteStudentCode;
    }
    set validInviteStudentCode(value: boolean) {
        this._validInviteStudentCode = value;
    }

    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
}
