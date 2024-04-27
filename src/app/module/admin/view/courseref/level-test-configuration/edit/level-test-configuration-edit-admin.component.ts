import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {LevelTestConfigurationAdminService} from 'src/app/shared/service/admin/courseref/LevelTestConfigurationAdmin.service';
import {LevelTestConfigurationDto} from 'src/app/shared/model/courseref/LevelTestConfiguration.model';
import {LevelTestConfigurationCriteria} from 'src/app/shared/criteria/courseref/LevelTestConfigurationCriteria.model';


import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';

@Component({
  selector: 'app-level-test-configuration-edit-admin',
  templateUrl: './level-test-configuration-edit-admin.component.html'
})
export class LevelTestConfigurationEditAdminComponent extends AbstractEditController<LevelTestConfigurationDto, LevelTestConfigurationCriteria, LevelTestConfigurationAdminService>   implements OnInit {



    private _validParcoursCode = true;
    private _validParcoursLibelle = true;



    constructor( private levelTestConfigurationService: LevelTestConfigurationAdminService , private parcoursService: ParcoursAdminService) {
        super(levelTestConfigurationService);
    }

    ngOnInit(): void {
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
    }


    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
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
}
