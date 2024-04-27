import {Component, OnInit} from '@angular/core';
import {LangueAdminService} from 'src/app/shared/service/admin/inscriptionref/LangueAdmin.service';
import {LangueDto} from 'src/app/shared/model/inscriptionref/Langue.model';
import {LangueCriteria} from 'src/app/shared/criteria/inscriptionref/LangueCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-langue-list-admin',
  templateUrl: './langue-list-admin.component.html'
})
export class LangueListAdminComponent extends AbstractListController<LangueDto, LangueCriteria, LangueAdminService>  implements OnInit {

    override fileName = 'Langue';




    constructor( private langueService: LangueAdminService  ) {
        super(langueService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Langue').subscribe(() => {
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
