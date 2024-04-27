import {Component, OnInit} from '@angular/core';
import {TrancheHoraireProfAdminService} from 'src/app/shared/service/admin/prof/TrancheHoraireProfAdmin.service';
import {TrancheHoraireProfDto} from 'src/app/shared/model/prof/TrancheHoraireProf.model';
import {TrancheHoraireProfCriteria} from 'src/app/shared/criteria/prof/TrancheHoraireProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-tranche-horaire-prof-list-admin',
  templateUrl: './tranche-horaire-prof-list-admin.component.html'
})
export class TrancheHoraireProfListAdminComponent extends AbstractListController<TrancheHoraireProfDto, TrancheHoraireProfCriteria, TrancheHoraireProfAdminService>  implements OnInit {

    override fileName = 'TrancheHoraireProf';


    profs: Array<ProfDto>;


    constructor( private trancheHoraireProfService: TrancheHoraireProfAdminService  , private profService: ProfAdminService) {
        super(trancheHoraireProfService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TrancheHoraireProf').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'startHour', header: 'Start hour'},
            {field: 'endHour', header: 'End hour'},
            {field: 'day', header: 'Day'},
            {field: 'groupIndex', header: 'Group index'},
            {field: 'profsId', header: 'Profs id'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Prof': e.prof?.ref ,
                 'Start hour': e.startHour ,
                 'End hour': e.endHour ,
                 'Day': e.day ,
                 'Group index': e.groupIndex ,
                 'Profs id': e.profsId ,
            }
        });

        this.criteriaData = [{
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Start hour': this.criteria.startHour ? this.criteria.startHour : environment.emptyForExport ,
            'End hour': this.criteria.endHour ? this.criteria.endHour : environment.emptyForExport ,
            'Day Min': this.criteria.dayMin ? this.criteria.dayMin : environment.emptyForExport ,
            'Day Max': this.criteria.dayMax ? this.criteria.dayMax : environment.emptyForExport ,
            'Group index Min': this.criteria.groupIndexMin ? this.criteria.groupIndexMin : environment.emptyForExport ,
            'Group index Max': this.criteria.groupIndexMax ? this.criteria.groupIndexMax : environment.emptyForExport ,
            'Profs id Min': this.criteria.profsIdMin ? this.criteria.profsIdMin : environment.emptyForExport ,
            'Profs id Max': this.criteria.profsIdMax ? this.criteria.profsIdMax : environment.emptyForExport ,
        }];
      }
}
