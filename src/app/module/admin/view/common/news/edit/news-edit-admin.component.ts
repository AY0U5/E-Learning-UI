import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {NewsAdminService} from 'src/app/shared/service/admin/common/NewsAdmin.service';
import {NewsDto} from 'src/app/shared/model/common/News.model';
import {NewsCriteria} from 'src/app/shared/criteria/common/NewsCriteria.model';



@Component({
  selector: 'app-news-edit-admin',
  templateUrl: './news-edit-admin.component.html'
})
export class NewsEditAdminComponent extends AbstractEditController<NewsDto, NewsCriteria, NewsAdminService>   implements OnInit {


    private _validNewsRef = true;




    constructor( private newsService: NewsAdminService ) {
        super(newsService);
    }

    ngOnInit(): void {
    }
    public override prepareEdit() {
        this.item.dateNews = this.newsService.format(this.item.dateNews);
        this.item.dateDebut = this.newsService.format(this.item.dateDebut);
        this.item.dateFin = this.newsService.format(this.item.dateFin);
    }



    public override setValidation(value: boolean){
        this.validNewsRef = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateNewsRef();
    }
    public validateNewsRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validNewsRef = false;
        } else {
            this.validNewsRef = true;
        }
    }






    get validNewsRef(): boolean {
        return this._validNewsRef;
    }
    set validNewsRef(value: boolean) {
        this._validNewsRef = value;
    }

}
