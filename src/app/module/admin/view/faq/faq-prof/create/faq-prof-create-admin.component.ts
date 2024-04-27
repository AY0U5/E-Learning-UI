import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FaqProfAdminService} from 'src/app/shared/service/admin/faq/FaqProfAdmin.service';
import {FaqProfDto} from 'src/app/shared/model/faq/FaqProf.model';
import {FaqProfCriteria} from 'src/app/shared/criteria/faq/FaqProfCriteria.model';
import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminAdminService} from 'src/app/shared/service/admin/alc/AdminAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-faq-prof-create-admin',
  templateUrl: './faq-prof-create-admin.component.html'
})
export class FaqProfCreateAdminComponent extends AbstractCreateController<FaqProfDto, FaqProfCriteria, FaqProfAdminService>  implements OnInit {



   private _validFaqProfLibelle = true;
    private _validProfRef = true;
    private _validFaqTypeLibelle = true;

    constructor( private faqProfService: FaqProfAdminService , private faqTypeService: FaqTypeAdminService, private adminService: AdminAdminService, private profService: ProfAdminService) {
        super(faqProfService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.admin = new AdminDto();
        this.adminService.findAll().subscribe((data) => this.admins = data);
        this.faqType = new FaqTypeDto();
        this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
    }





    public override setValidation(value: boolean){
        this.validFaqProfLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFaqProfLibelle();
    }

    public validateFaqProfLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validFaqProfLibelle = false;
        } else {
            this.validFaqProfLibelle = true;
        }
    }


    public async openCreateFaqType(faqType: string) {
    const isPermistted = await this.roleService.isPermitted('FaqType', 'add');
    if(isPermistted) {
         this.faqType = new FaqTypeDto();
         this.createFaqTypeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get prof(): ProfDto {
        return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
        return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get createProfDialog(): boolean {
       return this.profService.createDialog;
    }
    set createProfDialog(value: boolean) {
        this.profService.createDialog= value;
    }
    get faqType(): FaqTypeDto {
        return this.faqTypeService.item;
    }
    set faqType(value: FaqTypeDto) {
        this.faqTypeService.item = value;
    }
    get faqTypes(): Array<FaqTypeDto> {
        return this.faqTypeService.items;
    }
    set faqTypes(value: Array<FaqTypeDto>) {
        this.faqTypeService.items = value;
    }
    get createFaqTypeDialog(): boolean {
       return this.faqTypeService.createDialog;
    }
    set createFaqTypeDialog(value: boolean) {
        this.faqTypeService.createDialog= value;
    }
    get admin(): AdminDto {
        return this.adminService.item;
    }
    set admin(value: AdminDto) {
        this.adminService.item = value;
    }
    get admins(): Array<AdminDto> {
        return this.adminService.items;
    }
    set admins(value: Array<AdminDto>) {
        this.adminService.items = value;
    }
    get createAdminDialog(): boolean {
       return this.adminService.createDialog;
    }
    set createAdminDialog(value: boolean) {
        this.adminService.createDialog= value;
    }



    get validFaqProfLibelle(): boolean {
        return this._validFaqProfLibelle;
    }

    set validFaqProfLibelle(value: boolean) {
         this._validFaqProfLibelle = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validFaqTypeLibelle(): boolean {
        return this._validFaqTypeLibelle;
    }
    set validFaqTypeLibelle(value: boolean) {
        this._validFaqTypeLibelle = value;
    }


}
