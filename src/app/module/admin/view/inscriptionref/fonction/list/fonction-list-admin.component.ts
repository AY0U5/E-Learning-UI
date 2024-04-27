import {Component, OnInit} from '@angular/core';
import {FonctionAdminService} from 'src/app/shared/service/admin/inscriptionref/FonctionAdmin.service';
import {FonctionDto} from 'src/app/shared/model/inscriptionref/Fonction.model';
import {FonctionCriteria} from 'src/app/shared/criteria/inscriptionref/FonctionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-fonction-list-admin',
  templateUrl: './fonction-list-admin.component.html'
})
export class FonctionListAdminComponent extends AbstractListController<FonctionDto, FonctionCriteria, FonctionAdminService>  implements OnInit {

    override fileName = 'Fonction';




    constructor( private fonctionService: FonctionAdminService  ) {
        super(fonctionService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Fonction').subscribe(() => {
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
