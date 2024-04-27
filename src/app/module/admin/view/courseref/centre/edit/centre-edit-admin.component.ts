import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CentreAdminService} from 'src/app/shared/service/admin/courseref/CentreAdmin.service';
import {CentreDto} from 'src/app/shared/model/courseref/Centre.model';
import {CentreCriteria} from 'src/app/shared/criteria/courseref/CentreCriteria.model';


import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';

@Component({
  selector: 'app-centre-edit-admin',
  templateUrl: './centre-edit-admin.component.html'
})
export class CentreEditAdminComponent extends AbstractEditController<CentreDto, CentreCriteria, CentreAdminService>   implements OnInit {

    private _parcourssElement = new ParcoursDto();

    private _validCentreRef = true;

    private _validParcourssCode = true;
    private _validParcourssLibelle = true;



    constructor( private centreService: CentreAdminService , private parcoursService: ParcoursAdminService) {
        super(centreService);
    }

    ngOnInit(): void {

    }


    public validateParcourss(){
        this.errorMessages = new Array();
        this.validateParcourssCode();
        this.validateParcourssLibelle();
    }
    public override setValidation(value: boolean){
        this.validCentreRef = value;
        this.validParcourssCode = value;
        this.validParcourssLibelle = value;
        }
   public addParcourss() {
        if( this.item.parcourss == null )
            this.item.parcourss = new Array<ParcoursDto>();
       this.validateParcourss();
       if (this.errorMessages.length === 0) {
            if(this.parcourssElement.id == null){
                this.item.parcourss.push(this.parcourssElement);
            }else{
                const index = this.item.parcourss.findIndex(e => e.id == this.parcourssElement.id);
                this.item.parcourss[index] = this.parcourssElement;
            }
          this.parcourssElement = new ParcoursDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteParcourss(p: ParcoursDto) {
        this.item.parcourss.forEach((element, index) => {
            if (element === p) { this.item.parcourss.splice(index, 1); }
        });
    }

    public editParcourss(p: ParcoursDto) {
        this.parcourssElement = {... p};
        this.activeTab = 0;
    }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCentreRef();
    }
    public validateCentreRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validCentreRef = false;
        } else {
            this.validCentreRef = true;
        }
    }


    private validateParcourssCode(){
        if (this.parcourssElement.code == null) {
        this.errorMessages.push('Code de la parcours est  invalide');
            this.validParcourssCode = false;
        } else {
            this.validParcourssCode = true;
        }
    }
    private validateParcourssLibelle(){
        if (this.parcourssElement.libelle == null) {
        this.errorMessages.push('Libelle de la parcours est  invalide');
            this.validParcourssLibelle = false;
        } else {
            this.validParcourssLibelle = true;
        }
    }



    get parcourssElement(): ParcoursDto {
        if( this._parcourssElement == null )
            this._parcourssElement = new ParcoursDto();
         return this._parcourssElement;
    }

    set parcourssElement(value: ParcoursDto) {
        this._parcourssElement = value;
    }

    get validCentreRef(): boolean {
        return this._validCentreRef;
    }
    set validCentreRef(value: boolean) {
        this._validCentreRef = value;
    }

    get validParcourssCode(): boolean {
        return this._validParcourssCode;
    }
    set validParcourssCode(value: boolean) {
        this._validParcourssCode = value;
    }
    get validParcourssLibelle(): boolean {
        return this._validParcourssLibelle;
    }
    set validParcourssLibelle(value: boolean) {
        this._validParcourssLibelle = value;
    }
}
