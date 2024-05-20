import {Component, OnInit} from '@angular/core';
import {EtatSectionAdminService} from 'src/app/shared/service/admin/courseref/EtatSectionAdmin.service';
import {EtatSectionDto} from 'src/app/shared/model/courseref/EtatSection.model';
import {EtatSectionCriteria} from 'src/app/shared/criteria/courseref/EtatSectionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
    selector: 'app-etat-section-list-admin',
    templateUrl: './etat-section-list-admin.component.html'
})
export class EtatSectionListAdminComponent extends AbstractListController<EtatSectionDto, EtatSectionCriteria, EtatSectionAdminService>  implements OnInit {

    override fileName = 'EtatSection';




    constructor( private etatSectionService: EtatSectionAdminService  ) {
        super(etatSectionService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EtatSection').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }





    public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Code': e.code ,
                'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
    }
}
