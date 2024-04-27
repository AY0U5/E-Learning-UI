import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialDetailAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialDetailAdmin.service';
import {FreeTrialDetailDto} from 'src/app/shared/model/freetrial/FreeTrialDetail.model';
import {FreeTrialDetailCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialDetailCriteria.model';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {FreeTrialDto} from 'src/app/shared/model/freetrial/FreeTrial.model';
import {FreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialAdmin.service';
@Component({
  selector: 'app-free-trial-detail-create-admin',
  templateUrl: './free-trial-detail-create-admin.component.html'
})
export class FreeTrialDetailCreateAdminComponent extends AbstractCreateController<FreeTrialDetailDto, FreeTrialDetailCriteria, FreeTrialDetailAdminService>  implements OnInit {



    private _validFreeTrialReference = true;
    private _validEtudiantRef = true;

    constructor( private freeTrialDetailService: FreeTrialDetailAdminService , private etudiantService: EtudiantAdminService, private freeTrialService: FreeTrialAdminService) {
        super(freeTrialDetailService);
    }

    ngOnInit(): void {
        this.freeTrial = new FreeTrialDto();
        this.freeTrialService.findAll().subscribe((data) => this.freeTrials = data);
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateFreeTrial(freeTrial: string) {
    const isPermistted = await this.roleService.isPermitted('FreeTrial', 'add');
    if(isPermistted) {
         this.freeTrial = new FreeTrialDto();
         this.createFreeTrialDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get freeTrial(): FreeTrialDto {
        return this.freeTrialService.item;
    }
    set freeTrial(value: FreeTrialDto) {
        this.freeTrialService.item = value;
    }
    get freeTrials(): Array<FreeTrialDto> {
        return this.freeTrialService.items;
    }
    set freeTrials(value: Array<FreeTrialDto>) {
        this.freeTrialService.items = value;
    }
    get createFreeTrialDialog(): boolean {
       return this.freeTrialService.createDialog;
    }
    set createFreeTrialDialog(value: boolean) {
        this.freeTrialService.createDialog= value;
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




    get validFreeTrialReference(): boolean {
        return this._validFreeTrialReference;
    }
    set validFreeTrialReference(value: boolean) {
        this._validFreeTrialReference = value;
    }
    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }


}
