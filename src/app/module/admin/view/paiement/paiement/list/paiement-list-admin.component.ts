import {Component, OnInit} from '@angular/core';
import {PaiementAdminService} from 'src/app/shared/service/admin/paiement/PaiementAdmin.service';
import {PaiementDto} from 'src/app/shared/model/paiement/Paiement.model';
import {PaiementCriteria} from 'src/app/shared/criteria/paiement/PaiementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-paiement-list-admin',
  templateUrl: './paiement-list-admin.component.html'
})
export class PaiementListAdminComponent extends AbstractListController<PaiementDto, PaiementCriteria, PaiementAdminService>  implements OnInit {

    override fileName = 'Paiement';


    profs: Array<ProfDto>;
    groupeEtudiants: Array<GroupeEtudiantDto>;


    constructor( private paiementService: PaiementAdminService  , private groupeEtudiantService: GroupeEtudiantAdminService, private profService: ProfAdminService) {
        super(paiementService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Paiement').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
                this.loadGroupeEtudiant();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'datePaiement', header: 'Date paiement'},
            {field: 'groupeEtudiant?.id', header: 'Groupe etudiant'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadGroupeEtudiant(){
       this.groupeEtudiantService.findAll().subscribe(groupeEtudiants => this.groupeEtudiants = groupeEtudiants, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Prof': e.prof?.ref ,
                'Date paiement': this.datePipe.transform(e.datePaiement , 'dd/MM/yyyy hh:mm'),
                'Groupe etudiant': e.groupeEtudiant?.id ,
            }
        });

        this.criteriaData = [{
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Date paiement Min': this.criteria.datePaiementFrom ? this.datePipe.transform(this.criteria.datePaiementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date paiement Max': this.criteria.datePaiementTo ? this.datePipe.transform(this.criteria.datePaiementTo , this.dateFormat) : environment.emptyForExport ,
        //'Groupe etudiant': this.criteria.groupeEtudiant?.id ? this.criteria.groupeEtudiant?.id : environment.emptyForExport ,
        }];
      }
}
