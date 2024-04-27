import {Component, OnInit} from '@angular/core';
import {ServicesAdminService} from 'src/app/shared/service/admin/freetrial/ServicesAdmin.service';
import {ServicesDto} from 'src/app/shared/model/freetrial/Services.model';
import {ServicesCriteria} from 'src/app/shared/criteria/freetrial/ServicesCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-services-list-admin',
  templateUrl: './services-list-admin.component.html'
})
export class ServicesListAdminComponent extends AbstractListController<ServicesDto, ServicesCriteria, ServicesAdminService>  implements OnInit {

    override fileName = 'Services';




    constructor( private servicesService: ServicesAdminService  ) {
        super(servicesService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Services').subscribe(() => {
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
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
