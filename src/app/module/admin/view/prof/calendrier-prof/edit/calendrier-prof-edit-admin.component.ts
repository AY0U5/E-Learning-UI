import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CalendrierProfAdminService} from 'src/app/shared/service/admin/prof/CalendrierProfAdmin.service';
import {CalendrierProfDto} from 'src/app/shared/model/prof/CalendrierProf.model';
import {CalendrierProfCriteria} from 'src/app/shared/criteria/prof/CalendrierProfCriteria.model';


import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';

@Component({
  selector: 'app-calendrier-prof-edit-admin',
  templateUrl: './calendrier-prof-edit-admin.component.html'
})
export class CalendrierProfEditAdminComponent extends AbstractEditController<CalendrierProfDto, CalendrierProfCriteria, CalendrierProfAdminService>   implements OnInit {


    private _validCalendrierProfRef = true;

    private _validProfRef = true;
    private _validEtudiantRef = true;



    constructor( private calendrierProfService: CalendrierProfAdminService , private etudiantService: EtudiantAdminService, private profService: ProfAdminService) {
        super(calendrierProfService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    }
    public override prepareEdit() {
        this.item.startRecur = this.calendrierProfService.format(this.item.startRecur);
        this.item.endRecur = this.calendrierProfService.format(this.item.endRecur);
    }



    public override setValidation(value: boolean){
        this.validCalendrierProfRef = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCalendrierProfRef();
    }
    public validateCalendrierProfRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validCalendrierProfRef = false;
        } else {
            this.validCalendrierProfRef = true;
        }
    }



   public async openCreateProf(prof: string) {
        const isPermistted = await this.roleService.isPermitted('Prof', 'edit');
        if (isPermistted) {
             this.prof = new ProfDto();
             this.createProfDialog = true;
        }else {
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


    get validCalendrierProfRef(): boolean {
        return this._validCalendrierProfRef;
    }
    set validCalendrierProfRef(value: boolean) {
        this._validCalendrierProfRef = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
}
