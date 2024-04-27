import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {RecommendTeacherAdminService} from 'src/app/shared/service/admin/recomrecla/RecommendTeacherAdmin.service';
import {RecommendTeacherDto} from 'src/app/shared/model/recomrecla/RecommendTeacher.model';
import {RecommendTeacherCriteria} from 'src/app/shared/criteria/recomrecla/RecommendTeacherCriteria.model';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-recommend-teacher-create-admin',
  templateUrl: './recommend-teacher-create-admin.component.html'
})
export class RecommendTeacherCreateAdminComponent extends AbstractCreateController<RecommendTeacherDto, RecommendTeacherCriteria, RecommendTeacherAdminService>  implements OnInit {



   private _validRecommendTeacherRef = true;
    private _validProfRef = true;

    constructor( private recommendTeacherService: RecommendTeacherAdminService , private profService: ProfAdminService) {
        super(recommendTeacherService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
    }





    public override setValidation(value: boolean){
        this.validRecommendTeacherRef = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRecommendTeacherRef();
    }

    public validateRecommendTeacherRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validRecommendTeacherRef = false;
        } else {
            this.validRecommendTeacherRef = true;
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



    get validRecommendTeacherRef(): boolean {
        return this._validRecommendTeacherRef;
    }

    set validRecommendTeacherRef(value: boolean) {
         this._validRecommendTeacherRef = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }


}
