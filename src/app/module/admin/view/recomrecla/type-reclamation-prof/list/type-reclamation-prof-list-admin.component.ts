import {Component, OnInit} from '@angular/core';
import {TypeReclamationProfAdminService} from 'src/app/shared/service/admin/recomrecla/TypeReclamationProfAdmin.service';
import {TypeReclamationProfDto} from 'src/app/shared/model/recomrecla/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/shared/criteria/recomrecla/TypeReclamationProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-reclamation-prof-list-admin',
  templateUrl: './type-reclamation-prof-list-admin.component.html'
})
export class TypeReclamationProfListAdminComponent extends AbstractListController<TypeReclamationProfDto, TypeReclamationProfCriteria, TypeReclamationProfAdminService>  implements OnInit {

    override fileName = 'TypeReclamationProf';




    constructor( private typeReclamationProfService: TypeReclamationProfAdminService  ) {
        super(typeReclamationProfService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TypeReclamationProf').subscribe(() => {
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
