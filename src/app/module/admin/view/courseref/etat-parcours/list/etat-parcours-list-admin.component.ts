import {Component, OnInit} from '@angular/core';
import {EtatParcoursAdminService} from 'src/app/shared/service/admin/courseref/EtatParcoursAdmin.service';
import {EtatParcoursDto} from 'src/app/shared/model/courseref/EtatParcours.model';
import {EtatParcoursCriteria} from 'src/app/shared/criteria/courseref/EtatParcoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
    selector: 'app-etat-parcours-list-admin',
    templateUrl: './etat-parcours-list-admin.component.html'
})
export class EtatParcoursListAdminComponent extends AbstractListController<EtatParcoursDto, EtatParcoursCriteria, EtatParcoursAdminService>  implements OnInit {

    override fileName = 'EtatParcours';




    constructor( private etatParcoursService: EtatParcoursAdminService  ) {
        super(etatParcoursService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EtatParcours').subscribe(() => {
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
