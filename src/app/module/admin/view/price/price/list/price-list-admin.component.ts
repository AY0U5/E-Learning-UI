import {Component, OnInit} from '@angular/core';
import {PriceAdminService} from 'src/app/shared/service/admin/price/PriceAdmin.service';
import {PriceDto} from 'src/app/shared/model/price/Price.model';
import {PriceCriteria} from 'src/app/shared/criteria/price/PriceCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-price-list-admin',
  templateUrl: './price-list-admin.component.html'
})
export class PriceListAdminComponent extends AbstractListController<PriceDto, PriceCriteria, PriceAdminService>  implements OnInit {

    override fileName = 'Price';


     yesOrNoForGroup: any[] = [];


    constructor( private priceService: PriceAdminService  ) {
        super(priceService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Price').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.yesOrNoForGroup =  [{label: 'ForGroup', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'price', header: 'Price'},
            {field: 'oldPrice', header: 'Old price'},
            {field: 'lib', header: 'Lib'},
            {field: 'nreCourse', header: 'Nre course'},
            {field: 'nreHours', header: 'Nre hours'},
            {field: 'nreMonth', header: 'Nre month'},
            {field: 'forGroup', header: 'For group'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Price': e.price ,
                 'Old price': e.oldPrice ,
                 'Lib': e.lib ,
                 'Nre course': e.nreCourse ,
                 'Nre hours': e.nreHours ,
                 'Nre month': e.nreMonth ,
                'For group': e.forGroup? 'Vrai' : 'Faux' ,
            }
        });

        this.criteriaData = [{
            'Price Min': this.criteria.priceMin ? this.criteria.priceMin : environment.emptyForExport ,
            'Price Max': this.criteria.priceMax ? this.criteria.priceMax : environment.emptyForExport ,
            'Old price Min': this.criteria.oldPriceMin ? this.criteria.oldPriceMin : environment.emptyForExport ,
            'Old price Max': this.criteria.oldPriceMax ? this.criteria.oldPriceMax : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
            'Nre course Min': this.criteria.nreCourseMin ? this.criteria.nreCourseMin : environment.emptyForExport ,
            'Nre course Max': this.criteria.nreCourseMax ? this.criteria.nreCourseMax : environment.emptyForExport ,
            'Nre hours Min': this.criteria.nreHoursMin ? this.criteria.nreHoursMin : environment.emptyForExport ,
            'Nre hours Max': this.criteria.nreHoursMax ? this.criteria.nreHoursMax : environment.emptyForExport ,
            'Nre month Min': this.criteria.nreMonthMin ? this.criteria.nreMonthMin : environment.emptyForExport ,
            'Nre month Max': this.criteria.nreMonthMax ? this.criteria.nreMonthMax : environment.emptyForExport ,
            'For group': this.criteria.forGroup ? (this.criteria.forGroup ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        }];
      }
}
