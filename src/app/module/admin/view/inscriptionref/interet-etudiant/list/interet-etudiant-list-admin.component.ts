import {Component, OnInit} from '@angular/core';
import {InteretEtudiantAdminService} from 'src/app/shared/service/admin/inscriptionref/InteretEtudiantAdmin.service';
import {InteretEtudiantDto} from 'src/app/shared/model/inscriptionref/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/shared/criteria/inscriptionref/InteretEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-interet-etudiant-list-admin',
  templateUrl: './interet-etudiant-list-admin.component.html'
})
export class InteretEtudiantListAdminComponent extends AbstractListController<InteretEtudiantDto, InteretEtudiantCriteria, InteretEtudiantAdminService>  implements OnInit {

    override fileName = 'InteretEtudiant';




    constructor( private interetEtudiantService: InteretEtudiantAdminService  ) {
        super(interetEtudiantService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('InteretEtudiant').subscribe(() => {
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
