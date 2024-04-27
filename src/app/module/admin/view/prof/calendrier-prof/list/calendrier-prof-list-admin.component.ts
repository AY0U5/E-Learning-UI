import {Component, OnInit} from '@angular/core';
import {CalendrierProfAdminService} from 'src/app/shared/service/admin/prof/CalendrierProfAdmin.service';
import {CalendrierProfDto} from 'src/app/shared/model/prof/CalendrierProf.model';
import {CalendrierProfCriteria} from 'src/app/shared/criteria/prof/CalendrierProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-calendrier-prof-list-admin',
  templateUrl: './calendrier-prof-list-admin.component.html'
})
export class CalendrierProfListAdminComponent extends AbstractListController<CalendrierProfDto, CalendrierProfCriteria, CalendrierProfAdminService>  implements OnInit {

    override fileName = 'CalendrierProf';


    profs: Array<ProfDto>;
    etudiants: Array<EtudiantDto>;


    constructor( private calendrierProfService: CalendrierProfAdminService  , private etudiantService: EtudiantAdminService, private profService: ProfAdminService) {
        super(calendrierProfService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('CalendrierProf').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
                this.loadEtudiant();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'startTime', header: 'Start time'},
            {field: 'endTime', header: 'End time'},
            {field: 'startRecur', header: 'Start recur'},
            {field: 'endRecur', header: 'End recur'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Start time': e.startTime ,
                 'End time': e.endTime ,
                'Start recur': this.datePipe.transform(e.startRecur , 'dd/MM/yyyy hh:mm'),
                'End recur': this.datePipe.transform(e.endRecur , 'dd/MM/yyyy hh:mm'),
                'Prof': e.prof?.ref ,
                'Etudiant': e.etudiant?.ref ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Start time': this.criteria.startTime ? this.criteria.startTime : environment.emptyForExport ,
            'End time': this.criteria.endTime ? this.criteria.endTime : environment.emptyForExport ,
            'Start recur Min': this.criteria.startRecurFrom ? this.datePipe.transform(this.criteria.startRecurFrom , this.dateFormat) : environment.emptyForExport ,
            'Start recur Max': this.criteria.startRecurTo ? this.datePipe.transform(this.criteria.startRecurTo , this.dateFormat) : environment.emptyForExport ,
            'End recur Min': this.criteria.endRecurFrom ? this.datePipe.transform(this.criteria.endRecurFrom , this.dateFormat) : environment.emptyForExport ,
            'End recur Max': this.criteria.endRecurTo ? this.datePipe.transform(this.criteria.endRecurTo , this.dateFormat) : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        }];
      }
}
