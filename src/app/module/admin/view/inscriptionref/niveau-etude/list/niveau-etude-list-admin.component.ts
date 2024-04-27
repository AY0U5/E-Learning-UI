import {Component, OnInit} from '@angular/core';
import {NiveauEtudeAdminService} from 'src/app/shared/service/admin/inscriptionref/NiveauEtudeAdmin.service';
import {NiveauEtudeDto} from 'src/app/shared/model/inscriptionref/NiveauEtude.model';
import {NiveauEtudeCriteria} from 'src/app/shared/criteria/inscriptionref/NiveauEtudeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-niveau-etude-list-admin',
  templateUrl: './niveau-etude-list-admin.component.html'
})
export class NiveauEtudeListAdminComponent extends AbstractListController<NiveauEtudeDto, NiveauEtudeCriteria, NiveauEtudeAdminService>  implements OnInit {

    override fileName = 'NiveauEtude';




    constructor( private niveauEtudeService: NiveauEtudeAdminService  ) {
        super(niveauEtudeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('NiveauEtude').subscribe(() => {
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
            {field: 'code', header: 'Code'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
