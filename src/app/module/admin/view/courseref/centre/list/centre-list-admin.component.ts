import {Component, OnInit} from '@angular/core';
import {CentreAdminService} from 'src/app/shared/service/admin/courseref/CentreAdmin.service';
import {CentreDto} from 'src/app/shared/model/courseref/Centre.model';
import {CentreCriteria} from 'src/app/shared/criteria/courseref/CentreCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';


@Component({
  selector: 'app-centre-list-admin',
  templateUrl: './centre-list-admin.component.html'
})
export class CentreListAdminComponent extends AbstractListController<CentreDto, CentreCriteria, CentreAdminService>  implements OnInit {

    override fileName = 'Centre';




    constructor( private centreService: CentreAdminService  , private parcoursService: ParcoursAdminService) {
        super(centreService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Centre').subscribe(() => {
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
            {field: 'description', header: 'Description'},
            {field: 'log', header: 'Log'},
            {field: 'password', header: 'Password'},
        ];
    }



	public override initDuplicate(res: CentreDto) {
        if (res.parcourss != null) {
             res.parcourss.forEach(d => { d.centre = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                 'Log': e.log ,
                 'Password': e.password ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Log': this.criteria.log ? this.criteria.log : environment.emptyForExport ,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport ,
        }];
      }
}
