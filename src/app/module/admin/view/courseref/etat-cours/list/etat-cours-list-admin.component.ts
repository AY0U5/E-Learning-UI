import {Component, OnInit} from '@angular/core';
import {EtatCoursAdminService} from 'src/app/shared/service/admin/courseref/EtatCoursAdmin.service';
import {EtatCoursDto} from 'src/app/shared/model/courseref/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/shared/criteria/courseref/EtatCoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-etat-cours-list-admin',
  templateUrl: './etat-cours-list-admin.component.html'
})
export class EtatCoursListAdminComponent extends AbstractListController<EtatCoursDto, EtatCoursCriteria, EtatCoursAdminService>  implements OnInit {

    override fileName = 'EtatCours';




    constructor( private etatCoursService: EtatCoursAdminService  ) {
        super(etatCoursService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EtatCours').subscribe(() => {
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
