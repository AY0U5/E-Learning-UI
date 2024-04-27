import {Component, OnInit} from '@angular/core';
import {NewsAdminService} from 'src/app/shared/service/admin/common/NewsAdmin.service';
import {NewsDto} from 'src/app/shared/model/common/News.model';
import {NewsCriteria} from 'src/app/shared/criteria/common/NewsCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-news-list-admin',
  templateUrl: './news-list-admin.component.html'
})
export class NewsListAdminComponent extends AbstractListController<NewsDto, NewsCriteria, NewsAdminService>  implements OnInit {

    override fileName = 'News';




    constructor( private newsService: NewsAdminService  ) {
        super(newsService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('News').subscribe(() => {
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
            {field: 'image', header: 'Image'},
            {field: 'dateNews', header: 'Date news'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'numeroOrdre', header: 'Numero ordre'},
            {field: 'destinataire', header: 'Destinataire'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Image': e.image ,
                 'Description': e.description ,
                'Date news': this.datePipe.transform(e.dateNews , 'dd/MM/yyyy hh:mm'),
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                 'Numero ordre': e.numeroOrdre ,
                 'Destinataire': e.destinataire ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Image': this.criteria.image ? this.criteria.image : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Date news Min': this.criteria.dateNewsFrom ? this.datePipe.transform(this.criteria.dateNewsFrom , this.dateFormat) : environment.emptyForExport ,
            'Date news Max': this.criteria.dateNewsTo ? this.datePipe.transform(this.criteria.dateNewsTo , this.dateFormat) : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
            'Numero ordre Min': this.criteria.numeroOrdreMin ? this.criteria.numeroOrdreMin : environment.emptyForExport ,
            'Numero ordre Max': this.criteria.numeroOrdreMax ? this.criteria.numeroOrdreMax : environment.emptyForExport ,
            'Destinataire': this.criteria.destinataire ? this.criteria.destinataire : environment.emptyForExport ,
        }];
      }
}
