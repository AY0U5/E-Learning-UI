import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CategorieProfAdminService} from 'src/app/shared/service/admin/prof/CategorieProfAdmin.service';
import {CategorieProfDto} from 'src/app/shared/model/prof/CategorieProf.model';
import {CategorieProfCriteria} from 'src/app/shared/criteria/prof/CategorieProfCriteria.model';


import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {TypeTeacherDto} from 'src/app/shared/model/prof/TypeTeacher.model';
import {TypeTeacherAdminService} from 'src/app/shared/service/admin/prof/TypeTeacherAdmin.service';
import {RecommendTeacherDto} from 'src/app/shared/model/recomrecla/RecommendTeacher.model';
import {RecommendTeacherAdminService} from 'src/app/shared/service/admin/recomrecla/RecommendTeacherAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
import {TrancheHoraireProfDto} from 'src/app/shared/model/prof/TrancheHoraireProf.model';
import {TrancheHoraireProfAdminService} from 'src/app/shared/service/admin/prof/TrancheHoraireProfAdmin.service';
import {ClassRoomDto} from 'src/app/shared/model/classroom/ClassRoom.model';
import {ClassRoomAdminService} from 'src/app/shared/service/admin/classroom/ClassRoomAdmin.service';

@Component({
  selector: 'app-categorie-prof-edit-admin',
  templateUrl: './categorie-prof-edit-admin.component.html'
})
export class CategorieProfEditAdminComponent extends AbstractEditController<CategorieProfDto, CategorieProfCriteria, CategorieProfAdminService>   implements OnInit {

    private _profsElement = new ProfDto();

    private _validCategorieProfCode = true;

    private _validProfsRef = true;



    constructor( private categorieProfService: CategorieProfAdminService , private parcoursService: ParcoursAdminService, private typeTeacherService: TypeTeacherAdminService, private profService: ProfAdminService) {
        super(categorieProfService);
    }

    ngOnInit(): void {
        this.profsElement.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.profsElement.typeTeacher = new TypeTeacherDto();
        this.typeTeacherService.findAll().subscribe((data) => this.typeTeachers = data);

    }


    public validateProfs(){
        this.errorMessages = new Array();
        this.validateProfsRef();
    }
    public override setValidation(value: boolean){
        this.validCategorieProfCode = value;
        this.validProfsRef = value;
        }
   public addProfs() {
        if( this.item.profs == null )
            this.item.profs = new Array<ProfDto>();
       this.validateProfs();
       if (this.errorMessages.length === 0) {
            if(this.profsElement.id == null){
                this.item.profs.push(this.profsElement);
            }else{
                const index = this.item.profs.findIndex(e => e.id == this.profsElement.id);
                this.item.profs[index] = this.profsElement;
            }
          this.profsElement = new ProfDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteProfs(p: ProfDto) {
        this.item.profs.forEach((element, index) => {
            if (element === p) { this.item.profs.splice(index, 1); }
        });
    }

    public editProfs(p: ProfDto) {
        this.profsElement = {... p};
        this.activeTab = 0;
    }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategorieProfCode();
    }
    public validateCategorieProfCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCategorieProfCode = false;
        } else {
            this.validCategorieProfCode = true;
        }
    }


    private validateProfsRef(){
        if (this.profsElement.ref == null) {
        this.errorMessages.push('Ref de la prof est  invalide');
            this.validProfsRef = false;
        } else {
            this.validProfsRef = true;
        }
    }

   public async openCreateTypeTeacher(typeTeacher: string) {
        const isPermistted = await this.roleService.isPermitted('TypeTeacher', 'edit');
        if (isPermistted) {
             this.typeTeacher = new TypeTeacherDto();
             this.createTypeTeacherDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
   get typeTeacher(): TypeTeacherDto {
       return this.typeTeacherService.item;
   }
  set typeTeacher(value: TypeTeacherDto) {
        this.typeTeacherService.item = value;
   }
   get typeTeachers(): Array<TypeTeacherDto> {
        return this.typeTeacherService.items;
   }
   set typeTeachers(value: Array<TypeTeacherDto>) {
        this.typeTeacherService.items = value;
   }
   get createTypeTeacherDialog(): boolean {
       return this.typeTeacherService.createDialog;
   }
  set createTypeTeacherDialog(value: boolean) {
       this.typeTeacherService.createDialog= value;
   }

    get profsElement(): ProfDto {
        if( this._profsElement == null )
            this._profsElement = new ProfDto();
         return this._profsElement;
    }

    set profsElement(value: ProfDto) {
        this._profsElement = value;
    }

    get validCategorieProfCode(): boolean {
        return this._validCategorieProfCode;
    }
    set validCategorieProfCode(value: boolean) {
        this._validCategorieProfCode = value;
    }

    get validProfsRef(): boolean {
        return this._validProfsRef;
    }
    set validProfsRef(value: boolean) {
        this._validProfsRef = value;
    }
}
