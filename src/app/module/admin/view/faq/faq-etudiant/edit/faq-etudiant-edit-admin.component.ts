import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FaqEtudiantAdminService} from 'src/app/shared/service/admin/faq/FaqEtudiantAdmin.service';
import {FaqEtudiantDto} from 'src/app/shared/model/faq/FaqEtudiant.model';
import {FaqEtudiantCriteria} from 'src/app/shared/criteria/faq/FaqEtudiantCriteria.model';


import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminAdminService} from 'src/app/shared/service/admin/alc/AdminAdmin.service';

@Component({
  selector: 'app-faq-etudiant-edit-admin',
  templateUrl: './faq-etudiant-edit-admin.component.html'
})
export class FaqEtudiantEditAdminComponent extends AbstractEditController<FaqEtudiantDto, FaqEtudiantCriteria, FaqEtudiantAdminService>   implements OnInit {


    private _validFaqEtudiantLibelle = true;

    private _validEtudiantRef = true;
    private _validFaqTypeLibelle = true;



    constructor( private faqEtudiantService: FaqEtudiantAdminService , private faqTypeService: FaqTypeAdminService, private etudiantService: EtudiantAdminService, private adminService: AdminAdminService) {
        super(faqEtudiantService);
    }

    ngOnInit(): void {
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.admin = new AdminDto();
        this.adminService.findAll().subscribe((data) => this.admins = data);
        this.faqType = new FaqTypeDto();
        this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
    }


    public override setValidation(value: boolean){
        this.validFaqEtudiantLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFaqEtudiantLibelle();
    }
    public validateFaqEtudiantLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validFaqEtudiantLibelle = false;
        } else {
            this.validFaqEtudiantLibelle = true;
        }
    }



   public async openCreateFaqType(faqType: string) {
        const isPermistted = await this.roleService.isPermitted('FaqType', 'edit');
        if (isPermistted) {
             this.faqType = new FaqTypeDto();
             this.createFaqTypeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
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


    get validFaqEtudiantLibelle(): boolean {
        return this._validFaqEtudiantLibelle;
    }
    set validFaqEtudiantLibelle(value: boolean) {
        this._validFaqEtudiantLibelle = value;
    }

    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
    get validFaqTypeLibelle(): boolean {
        return this._validFaqTypeLibelle;
    }
    set validFaqTypeLibelle(value: boolean) {
        this._validFaqTypeLibelle = value;
    }
}
