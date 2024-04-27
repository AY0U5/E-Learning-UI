import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ServicesAdminService} from 'src/app/shared/service/admin/freetrial/ServicesAdmin.service';
import {ServicesDto} from 'src/app/shared/model/freetrial/Services.model';
import {ServicesCriteria} from 'src/app/shared/criteria/freetrial/ServicesCriteria.model';



@Component({
  selector: 'app-services-edit-admin',
  templateUrl: './services-edit-admin.component.html'
})
export class ServicesEditAdminComponent extends AbstractEditController<ServicesDto, ServicesCriteria, ServicesAdminService>   implements OnInit {


    private _validServicesCode = true;
    private _validServicesLibelle = true;




    constructor( private servicesService: ServicesAdminService ) {
        super(servicesService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validServicesCode = value;
        this.validServicesLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateServicesCode();
        this.validateServicesLibelle();
    }
    public validateServicesCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validServicesCode = false;
        } else {
            this.validServicesCode = true;
        }
    }
    public validateServicesLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validServicesLibelle = false;
        } else {
            this.validServicesLibelle = true;
        }
    }






    get validServicesCode(): boolean {
        return this._validServicesCode;
    }
    set validServicesCode(value: boolean) {
        this._validServicesCode = value;
    }
    get validServicesLibelle(): boolean {
        return this._validServicesLibelle;
    }
    set validServicesLibelle(value: boolean) {
        this._validServicesLibelle = value;
    }

}
