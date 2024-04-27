import {Component, OnInit} from '@angular/core';
import {StatutSocialAdminService} from 'src/app/shared/service/admin/inscriptionref/StatutSocialAdmin.service';
import {StatutSocialDto} from 'src/app/shared/model/inscriptionref/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/shared/criteria/inscriptionref/StatutSocialCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-statut-social-list-admin',
  templateUrl: './statut-social-list-admin.component.html'
})
export class StatutSocialListAdminComponent extends AbstractListController<StatutSocialDto, StatutSocialCriteria, StatutSocialAdminService>  implements OnInit {

    override fileName = 'StatutSocial';




    constructor( private statutSocialService: StatutSocialAdminService  ) {
        super(statutSocialService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('StatutSocial').subscribe(() => {
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
