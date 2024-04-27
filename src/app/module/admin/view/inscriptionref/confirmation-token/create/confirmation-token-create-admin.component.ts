import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ConfirmationTokenAdminService} from 'src/app/shared/service/admin/inscriptionref/ConfirmationTokenAdmin.service';
import {ConfirmationTokenDto} from 'src/app/shared/model/inscriptionref/ConfirmationToken.model';
import {ConfirmationTokenCriteria} from 'src/app/shared/criteria/inscriptionref/ConfirmationTokenCriteria.model';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
@Component({
  selector: 'app-confirmation-token-create-admin',
  templateUrl: './confirmation-token-create-admin.component.html'
})
export class ConfirmationTokenCreateAdminComponent extends AbstractCreateController<ConfirmationTokenDto, ConfirmationTokenCriteria, ConfirmationTokenAdminService>  implements OnInit {



    private _validEtudiantRef = true;

    constructor( private confirmationTokenService: ConfirmationTokenAdminService , private etudiantService: EtudiantAdminService) {
        super(confirmationTokenService);
    }

    ngOnInit(): void {
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
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




    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }


}