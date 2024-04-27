import {Component, OnInit} from '@angular/core';
import {FaqEtudiantAdminService} from 'src/app/shared/service/admin/faq/FaqEtudiantAdmin.service';
import {FaqEtudiantDto} from 'src/app/shared/model/faq/FaqEtudiant.model';
import {FaqEtudiantCriteria} from 'src/app/shared/criteria/faq/FaqEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminAdminService} from 'src/app/shared/service/admin/alc/AdminAdmin.service';


@Component({
  selector: 'app-faq-etudiant-list-admin',
  templateUrl: './faq-etudiant-list-admin.component.html'
})
export class FaqEtudiantListAdminComponent extends AbstractListController<FaqEtudiantDto, FaqEtudiantCriteria, FaqEtudiantAdminService>  implements OnInit {

    override fileName = 'FaqEtudiant';


    etudiants: Array<EtudiantDto>;
    admins: Array<AdminDto>;
    faqTypes: Array<FaqTypeDto>;


    constructor( private faqEtudiantService: FaqEtudiantAdminService  , private faqTypeService: FaqTypeAdminService, private etudiantService: EtudiantAdminService, private adminService: AdminAdminService) {
        super(faqEtudiantService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FaqEtudiant').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
                this.loadAdmin();
                this.loadFaqType();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'admin?.id', header: 'Admin'},
            {field: 'faqType?.libelle', header: 'Faq type'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
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
                'Etudiant': e.etudiant?.ref ,
                'Admin': e.admin?.id ,
                'Faq type': e.faqType?.libelle ,
            }
        });

        this.criteriaData = [{
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Admin': this.criteria.admin?.id ? this.criteria.admin?.id : environment.emptyForExport ,
        //'Faq type': this.criteria.faqType?.libelle ? this.criteria.faqType?.libelle : environment.emptyForExport ,
        }];
      }
}
