import {Component, OnInit} from '@angular/core';
import {EtatInscriptionAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatInscriptionAdmin.service';
import {EtatInscriptionDto} from 'src/app/shared/model/inscriptionref/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/shared/criteria/inscriptionref/EtatInscriptionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-etat-inscription-list-admin',
  templateUrl: './etat-inscription-list-admin.component.html'
})
export class EtatInscriptionListAdminComponent extends AbstractListController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionAdminService>  implements OnInit {

    override fileName = 'EtatInscription';




    constructor( private etatInscriptionService: EtatInscriptionAdminService  ) {
        super(etatInscriptionService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EtatInscription').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
