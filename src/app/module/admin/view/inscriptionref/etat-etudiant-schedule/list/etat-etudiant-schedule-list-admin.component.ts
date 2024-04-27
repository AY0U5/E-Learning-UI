import {Component, OnInit} from '@angular/core';
import {EtatEtudiantScheduleAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatEtudiantScheduleAdmin.service';
import {EtatEtudiantScheduleDto} from 'src/app/shared/model/inscriptionref/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/shared/criteria/inscriptionref/EtatEtudiantScheduleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-etat-etudiant-schedule-list-admin',
  templateUrl: './etat-etudiant-schedule-list-admin.component.html'
})
export class EtatEtudiantScheduleListAdminComponent extends AbstractListController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleAdminService>  implements OnInit {

    override fileName = 'EtatEtudiantSchedule';




    constructor( private etatEtudiantScheduleService: EtatEtudiantScheduleAdminService  ) {
        super(etatEtudiantScheduleService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EtatEtudiantSchedule').subscribe(() => {
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
            {field: 'couleur', header: 'Couleur'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Couleur': e.couleur ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Couleur': this.criteria.couleur ? this.criteria.couleur : environment.emptyForExport ,
        }];
      }
}
