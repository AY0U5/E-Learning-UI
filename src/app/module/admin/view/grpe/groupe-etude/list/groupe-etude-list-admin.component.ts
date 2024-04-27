import {Component, OnInit} from '@angular/core';
import {GroupeEtudeAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudeAdmin.service';
import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/shared/criteria/grpe/GroupeEtudeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-groupe-etude-list-admin',
  templateUrl: './groupe-etude-list-admin.component.html'
})
export class GroupeEtudeListAdminComponent extends AbstractListController<GroupeEtudeDto, GroupeEtudeCriteria, GroupeEtudeAdminService>  implements OnInit {

    override fileName = 'GroupeEtude';




    constructor( private groupeEtudeService: GroupeEtudeAdminService  ) {
        super(groupeEtudeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('GroupeEtude').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'nombreEtudiant', header: 'Nombre etudiant'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                 'Nombre etudiant': e.nombreEtudiant ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Nombre etudiant Min': this.criteria.nombreEtudiantMin ? this.criteria.nombreEtudiantMin : environment.emptyForExport ,
            'Nombre etudiant Max': this.criteria.nombreEtudiantMax ? this.criteria.nombreEtudiantMax : environment.emptyForExport ,
        }];
      }
}
