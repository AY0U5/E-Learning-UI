import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantCriteria} from 'src/app/shared/criteria/grpe/GroupeEtudiantCriteria.model';


import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {GroupeEtatDto} from 'src/app/shared/model/grpe/GroupeEtat.model';
import {GroupeEtatAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtatAdmin.service';
import {GroupeEtudiantDetailDto} from 'src/app/shared/model/grpe/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantDetailAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {GroupeTypeDto} from 'src/app/shared/model/grpe/GroupeType.model';
import {GroupeTypeAdminService} from 'src/app/shared/service/admin/grpe/GroupeTypeAdmin.service';
import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudeAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';

@Component({
  selector: 'app-groupe-etudiant-edit-admin',
  templateUrl: './groupe-etudiant-edit-admin.component.html'
})
export class GroupeEtudiantEditAdminComponent extends AbstractEditController<GroupeEtudiantDto, GroupeEtudiantCriteria, GroupeEtudiantAdminService>   implements OnInit {

    private _groupeEtudiantDetailsElement = new GroupeEtudiantDetailDto();


    private _validGroupeEtudeLibelle = true;
    private _validGroupeTypeCode = true;
    private _validGroupeTypeLibelle = true;
    private _validGroupeEtatCode = true;
    private _validGroupeEtatLibelle = true;
    private _validParcoursCode = true;
    private _validParcoursLibelle = true;
    private _validProfRef = true;


    private _groupeEtudiantDetails: Array<GroupeEtudiantDetailDto> = [];

    constructor( private groupeEtudiantService: GroupeEtudiantAdminService , private parcoursService: ParcoursAdminService, private groupeEtatService: GroupeEtatAdminService, private groupeEtudiantDetailService: GroupeEtudiantDetailAdminService, private etudiantService: EtudiantAdminService, private groupeTypeService: GroupeTypeAdminService, private groupeEtudeService: GroupeEtudeAdminService, private profService: ProfAdminService) {
        super(groupeEtudiantService);
    }

    ngOnInit(): void {
        this.etudiantService.findAll().subscribe(data => this.prepareGroupeEtudiantDetails(data));
        this.groupeEtudiantDetailsElement.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);

        this.groupeEtude = new GroupeEtudeDto();
        this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
        this.groupeType = new GroupeTypeDto();
        this.groupeTypeService.findAll().subscribe((data) => this.groupeTypes = data);
        this.groupeEtat = new GroupeEtatDto();
        this.groupeEtatService.findAll().subscribe((data) => this.groupeEtats = data);
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
    }
    public override prepareEdit() {
        this.item.dateDebut = this.groupeEtudiantService.format(this.item.dateDebut);
        this.item.dateFin = this.groupeEtudiantService.format(this.item.dateFin);
    }



    prepareGroupeEtudiantDetails(etudiants: Array<EtudiantDto>): void{
        if( etudiants != null){
            etudiants.forEach(e => {
                const groupeEtudiantDetail = new GroupeEtudiantDetailDto();
                groupeEtudiantDetail.etudiant = e;
                this.groupeEtudiantDetails.push(groupeEtudiantDetail);
            });
        }
    }
    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateGroupeType(groupeType: string) {
        const isPermistted = await this.roleService.isPermitted('GroupeType', 'edit');
        if (isPermistted) {
             this.groupeType = new GroupeTypeDto();
             this.createGroupeTypeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateGroupeEtat(groupeEtat: string) {
        const isPermistted = await this.roleService.isPermitted('GroupeEtat', 'edit');
        if (isPermistted) {
             this.groupeEtat = new GroupeEtatDto();
             this.createGroupeEtatDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateGroupeEtude(groupeEtude: string) {
        const isPermistted = await this.roleService.isPermitted('GroupeEtude', 'edit');
        if (isPermistted) {
             this.groupeEtude = new GroupeEtudeDto();
             this.createGroupeEtudeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get groupeType(): GroupeTypeDto {
       return this.groupeTypeService.item;
   }
  set groupeType(value: GroupeTypeDto) {
        this.groupeTypeService.item = value;
   }
   get groupeTypes(): Array<GroupeTypeDto> {
        return this.groupeTypeService.items;
   }
   set groupeTypes(value: Array<GroupeTypeDto>) {
        this.groupeTypeService.items = value;
   }
   get createGroupeTypeDialog(): boolean {
       return this.groupeTypeService.createDialog;
   }
  set createGroupeTypeDialog(value: boolean) {
       this.groupeTypeService.createDialog= value;
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
   get groupeEtat(): GroupeEtatDto {
       return this.groupeEtatService.item;
   }
  set groupeEtat(value: GroupeEtatDto) {
        this.groupeEtatService.item = value;
   }
   get groupeEtats(): Array<GroupeEtatDto> {
        return this.groupeEtatService.items;
   }
   set groupeEtats(value: Array<GroupeEtatDto>) {
        this.groupeEtatService.items = value;
   }
   get createGroupeEtatDialog(): boolean {
       return this.groupeEtatService.createDialog;
   }
  set createGroupeEtatDialog(value: boolean) {
       this.groupeEtatService.createDialog= value;
   }
   get parcours(): ParcoursDto {
       return this.parcoursService.item;
   }
  set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
   }
   get parcourss(): Array<ParcoursDto> {
        return this.parcoursService.items;
   }
   set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
   }
   get createParcoursDialog(): boolean {
       return this.parcoursService.createDialog;
   }
  set createParcoursDialog(value: boolean) {
       this.parcoursService.createDialog= value;
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
   get groupeEtude(): GroupeEtudeDto {
       return this.groupeEtudeService.item;
   }
  set groupeEtude(value: GroupeEtudeDto) {
        this.groupeEtudeService.item = value;
   }
   get groupeEtudes(): Array<GroupeEtudeDto> {
        return this.groupeEtudeService.items;
   }
   set groupeEtudes(value: Array<GroupeEtudeDto>) {
        this.groupeEtudeService.items = value;
   }
   get createGroupeEtudeDialog(): boolean {
       return this.groupeEtudeService.createDialog;
   }
  set createGroupeEtudeDialog(value: boolean) {
       this.groupeEtudeService.createDialog= value;
   }

    get groupeEtudiantDetails(): Array<GroupeEtudiantDetailDto> {
        if( this._groupeEtudiantDetails == null )
            this._groupeEtudiantDetails = new Array();
         return this._groupeEtudiantDetails;
    }

    set groupeEtudiantDetails(value: Array<GroupeEtudiantDetailDto>) {
        this._groupeEtudiantDetails = value;
    }
    get groupeEtudiantDetailsElement(): GroupeEtudiantDetailDto {
        if( this._groupeEtudiantDetailsElement == null )
            this._groupeEtudiantDetailsElement = new GroupeEtudiantDetailDto();
         return this._groupeEtudiantDetailsElement;
    }

    set groupeEtudiantDetailsElement(value: GroupeEtudiantDetailDto) {
        this._groupeEtudiantDetailsElement = value;
    }


    get validGroupeEtudeLibelle(): boolean {
        return this._validGroupeEtudeLibelle;
    }
    set validGroupeEtudeLibelle(value: boolean) {
        this._validGroupeEtudeLibelle = value;
    }
    get validGroupeTypeCode(): boolean {
        return this._validGroupeTypeCode;
    }
    set validGroupeTypeCode(value: boolean) {
        this._validGroupeTypeCode = value;
    }
    get validGroupeTypeLibelle(): boolean {
        return this._validGroupeTypeLibelle;
    }
    set validGroupeTypeLibelle(value: boolean) {
        this._validGroupeTypeLibelle = value;
    }
    get validGroupeEtatCode(): boolean {
        return this._validGroupeEtatCode;
    }
    set validGroupeEtatCode(value: boolean) {
        this._validGroupeEtatCode = value;
    }
    get validGroupeEtatLibelle(): boolean {
        return this._validGroupeEtatLibelle;
    }
    set validGroupeEtatLibelle(value: boolean) {
        this._validGroupeEtatLibelle = value;
    }
    get validParcoursCode(): boolean {
        return this._validParcoursCode;
    }
    set validParcoursCode(value: boolean) {
        this._validParcoursCode = value;
    }
    get validParcoursLibelle(): boolean {
        return this._validParcoursLibelle;
    }
    set validParcoursLibelle(value: boolean) {
        this._validParcoursLibelle = value;
    }
    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
}
