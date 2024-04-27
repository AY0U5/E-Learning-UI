import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {NewsAdminService} from 'src/app/shared/service/admin/common/NewsAdmin.service';
import {NewsDto} from 'src/app/shared/model/common/News.model';
import {NewsCriteria} from 'src/app/shared/criteria/common/NewsCriteria.model';

@Component({
  selector: 'app-news-view-admin',
  templateUrl: './news-view-admin.component.html'
})
export class NewsViewAdminComponent extends AbstractViewController<NewsDto, NewsCriteria, NewsAdminService> implements OnInit {


    constructor(private newsService: NewsAdminService){
        super(newsService);
    }

    ngOnInit(): void {
    }




}
