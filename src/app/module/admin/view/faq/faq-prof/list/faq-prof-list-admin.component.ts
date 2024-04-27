import {Component, OnInit} from '@angular/core';
import {FaqProfAdminService} from 'src/app/shared/service/admin/faq/FaqProfAdmin.service';
import {FaqProfDto} from 'src/app/shared/model/faq/FaqProf.model';
import {FaqProfCriteria} from 'src/app/shared/criteria/faq/FaqProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminAdminService} from 'src/app/shared/service/admin/alc/AdminAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-faq-prof-list-admin',
  templateUrl: './faq-prof-list-admin.component.html'
})
export class FaqProfListAdminComponent extends AbstractListController<FaqProfDto, FaqProfCriteria, FaqProfAdminService>  implements OnInit {

    override fileName = 'FaqProf';


    profs: Array<ProfDto>;
    admins: Array<AdminDto>;
    faqTypes: Array<FaqTypeDto>;


    constructor( private faqProfService: FaqProfAdminService  , private faqTypeService: FaqTypeAdminService, private adminService: AdminAdminService, private profService: ProfAdminService) {
        super(faqProfService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FaqProf').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
                this.loadAdmin();
                this.loadFaqType();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'admin?.id', header: 'Admin'},
            {field: 'faqType?.libelle', header: 'Faq type'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadAdmin(){
       this.adminService.findAll().subscribe(admins => this.admins = admins, error => console.log(error))
    }
    public async loadFaqType(){
       this.faqTypeService.findAllOptimized().subscribe(faqTypes => this.faqTypes = faqTypes, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Description': e.description ,
                 'Libelle': e.libelle ,
                'Prof': e.prof?.ref ,
                'Admin': e.admin?.id ,
                'Faq type': e.faqType?.libelle ,
            }
        });

        this.criteriaData = [{
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Admin': this.criteria.admin?.id ? this.criteria.admin?.id : environment.emptyForExport ,
        //'Faq type': this.criteria.faqType?.libelle ? this.criteria.faqType?.libelle : environment.emptyForExport ,
        }];
      }
}
