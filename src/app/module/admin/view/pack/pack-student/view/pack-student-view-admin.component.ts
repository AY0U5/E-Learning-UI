import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PackStudentAdminService} from 'src/app/shared/service/admin/pack/PackStudentAdmin.service';
import {PackStudentDto} from 'src/app/shared/model/pack/PackStudent.model';
import {PackStudentCriteria} from 'src/app/shared/criteria/pack/PackStudentCriteria.model';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {PriceDto} from 'src/app/shared/model/price/Price.model';
import {PriceAdminService} from 'src/app/shared/service/admin/price/PriceAdmin.service';
@Component({
  selector: 'app-pack-student-view-admin',
  templateUrl: './pack-student-view-admin.component.html'
})
export class PackStudentViewAdminComponent extends AbstractViewController<PackStudentDto, PackStudentCriteria, PackStudentAdminService> implements OnInit {


    constructor(private packStudentService: PackStudentAdminService, private parcoursService: ParcoursAdminService, private priceService: PriceAdminService){
        super(packStudentService);
    }

    ngOnInit(): void {
    }


    get price(): PriceDto {
       return this.priceService.item;
    }
    set price(value: PriceDto) {
        this.priceService.item = value;
    }
    get prices(): Array<PriceDto> {
       return this.priceService.items;
    }
    set prices(value: Array<PriceDto>) {
        this.priceService.items = value;
    }
    get parcours(): ParcoursDto {
       return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss(): Array<ParcoursDto> {
       return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }


}
