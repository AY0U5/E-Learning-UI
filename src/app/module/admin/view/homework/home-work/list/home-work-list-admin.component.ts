import {Component, OnInit} from '@angular/core';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkCriteria} from 'src/app/shared/criteria/homework/HomeWorkCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {HomeWorkEtudiantDto} from 'src/app/shared/model/homework/HomeWorkEtudiant.model';
import {HomeWorkEtudiantAdminService} from 'src/app/shared/service/admin/homework/HomeWorkEtudiantAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/shared/model/homework/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkAdminService} from 'src/app/shared/service/admin/homework/ReponseEtudiantHomeWorkAdmin.service';
import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';
import {TypeHomeWorkDto} from 'src/app/shared/model/homework/TypeHomeWork.model';
import {TypeHomeWorkAdminService} from 'src/app/shared/service/admin/homework/TypeHomeWorkAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';


@Component({
  selector: 'app-home-work-list-admin',
  templateUrl: './home-work-list-admin.component.html'
})
export class HomeWorkListAdminComponent extends AbstractListController<HomeWorkDto, HomeWorkCriteria, HomeWorkAdminService>  implements OnInit {

    override fileName = 'HomeWork';


    courss: Array<CoursDto>;
    typeHomeWorks: Array<TypeHomeWorkDto>;


    constructor( private homeWorkService: HomeWorkAdminService  , private typeDeQuestionService: TypeDeQuestionAdminService, private homeWorkEtudiantService: HomeWorkEtudiantAdminService, private etudiantService: EtudiantAdminService, private homeWorkQuestionService: HomeWorkQuestionAdminService, private typeHomeWorkService: TypeHomeWorkAdminService, private coursService: CoursAdminService) {
        super(homeWorkService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('HomeWork').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadCours();
                this.loadTypeHomeWork();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'urlImage', header: 'Url image'},
            {field: 'urlVideo', header: 'Url video'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'typeHomeWork?.lib', header: 'Type home work'},
        ];
    }


    public async loadCours(){
       this.coursService.findAllOptimized().subscribe(courss => this.courss = courss, error => console.log(error))
    }
    public async loadTypeHomeWork(){
       this.typeHomeWorkService.findAllOptimized().subscribe(typeHomeWorks => this.typeHomeWorks = typeHomeWorks, error => console.log(error))
    }

	public override initDuplicate(res: HomeWorkDto) {
        if (res.homeWorkQuestions != null) {
             res.homeWorkQuestions.forEach(d => { d.homeWork = null; d.id = null; });
        }
        if (res.homeWorkEtudiants != null) {
             res.homeWorkEtudiants.forEach(d => { d.homeWork = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Url image': e.urlImage ,
                 'Url video': e.urlVideo ,
                'Cours': e.cours?.libelle ,
                'Type home work': e.typeHomeWork?.lib ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Url image': this.criteria.urlImage ? this.criteria.urlImage : environment.emptyForExport ,
            'Url video': this.criteria.urlVideo ? this.criteria.urlVideo : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
        //'Type home work': this.criteria.typeHomeWork?.lib ? this.criteria.typeHomeWork?.lib : environment.emptyForExport ,
        }];
      }
}
