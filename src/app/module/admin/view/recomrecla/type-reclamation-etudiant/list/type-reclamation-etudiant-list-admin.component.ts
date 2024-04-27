import {Component, OnInit} from '@angular/core';
import {TypeReclamationEtudiantAdminService} from 'src/app/shared/service/admin/recomrecla/TypeReclamationEtudiantAdmin.service';
import {TypeReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from 'src/app/shared/criteria/recomrecla/TypeReclamationEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-reclamation-etudiant-list-admin',
  templateUrl: './type-reclamation-etudiant-list-admin.component.html'
})
export class TypeReclamationEtudiantListAdminComponent extends AbstractListController<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria, TypeReclamationEtudiantAdminService>  implements OnInit {

    override fileName = 'TypeReclamationEtudiant';




    constructor( private typeReclamationEtudiantService: TypeReclamationEtudiantAdminService  ) {
        super(typeReclamationEtudiantService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TypeReclamationEtudiant').subscribe(() => {
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
