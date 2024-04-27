import {Component, OnInit} from '@angular/core';
import {ConfirmationTokenAdminService} from 'src/app/shared/service/admin/inscriptionref/ConfirmationTokenAdmin.service';
import {ConfirmationTokenDto} from 'src/app/shared/model/inscriptionref/ConfirmationToken.model';
import {ConfirmationTokenCriteria} from 'src/app/shared/criteria/inscriptionref/ConfirmationTokenCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';


@Component({
  selector: 'app-confirmation-token-list-admin',
  templateUrl: './confirmation-token-list-admin.component.html'
})
export class ConfirmationTokenListAdminComponent extends AbstractListController<ConfirmationTokenDto, ConfirmationTokenCriteria, ConfirmationTokenAdminService>  implements OnInit {

    override fileName = 'ConfirmationToken';


    etudiants: Array<EtudiantDto>;


    constructor( private confirmationTokenService: ConfirmationTokenAdminService  , private etudiantService: EtudiantAdminService) {
        super(confirmationTokenService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ConfirmationToken').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'token', header: 'Token'},
            {field: 'expiresAt', header: 'Expires at'},
            {field: 'createdAt', header: 'Created at'},
            {field: 'confirmedAt', header: 'Confirmed at'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Token': e.token ,
                'Expires at': this.datePipe.transform(e.expiresAt , 'dd/MM/yyyy hh:mm'),
                'Created at': this.datePipe.transform(e.createdAt , 'dd/MM/yyyy hh:mm'),
                'Confirmed at': this.datePipe.transform(e.confirmedAt , 'dd/MM/yyyy hh:mm'),
                'Etudiant': e.etudiant?.ref ,
            }
        });

        this.criteriaData = [{
            'Token': this.criteria.token ? this.criteria.token : environment.emptyForExport ,
            'Expires at Min': this.criteria.expiresAtFrom ? this.datePipe.transform(this.criteria.expiresAtFrom , this.dateFormat) : environment.emptyForExport ,
            'Expires at Max': this.criteria.expiresAtTo ? this.datePipe.transform(this.criteria.expiresAtTo , this.dateFormat) : environment.emptyForExport ,
            'Created at Min': this.criteria.createdAtFrom ? this.datePipe.transform(this.criteria.createdAtFrom , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.criteria.createdAtTo ? this.datePipe.transform(this.criteria.createdAtTo , this.dateFormat) : environment.emptyForExport ,
            'Confirmed at Min': this.criteria.confirmedAtFrom ? this.datePipe.transform(this.criteria.confirmedAtFrom , this.dateFormat) : environment.emptyForExport ,
            'Confirmed at Max': this.criteria.confirmedAtTo ? this.datePipe.transform(this.criteria.confirmedAtTo , this.dateFormat) : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        }];
      }
}
