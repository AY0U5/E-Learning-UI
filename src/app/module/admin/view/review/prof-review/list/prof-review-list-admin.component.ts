import {Component, OnInit} from '@angular/core';
import {ProfReviewAdminService} from 'src/app/shared/service/admin/review/ProfReviewAdmin.service';
import {ProfReviewDto} from 'src/app/shared/model/review/ProfReview.model';
import {ProfReviewCriteria} from 'src/app/shared/criteria/review/ProfReviewCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-prof-review-list-admin',
  templateUrl: './prof-review-list-admin.component.html'
})
export class ProfReviewListAdminComponent extends AbstractListController<ProfReviewDto, ProfReviewCriteria, ProfReviewAdminService>  implements OnInit {

    override fileName = 'ProfReview';


    etudiants: Array<EtudiantDto>;
    profs: Array<ProfDto>;
    courss: Array<CoursDto>;


    constructor( private profReviewService: ProfReviewAdminService  , private etudiantService: EtudiantAdminService, private coursService: CoursAdminService, private profService: ProfAdminService) {
        super(profReviewService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ProfReview').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
                this.loadProf();
                this.loadCours();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'review', header: 'Review'},
            {field: 'dateReview', header: 'Date review'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }
    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadCours(){
       this.coursService.findAllOptimized().subscribe(courss => this.courss = courss, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Etudiant': e.etudiant?.ref ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                 'Review': e.review ,
                 'Comment': e.comment ,
                'Date review': this.datePipe.transform(e.dateReview , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
            'Review Min': this.criteria.reviewMin ? this.criteria.reviewMin : environment.emptyForExport ,
            'Review Max': this.criteria.reviewMax ? this.criteria.reviewMax : environment.emptyForExport ,
            'Comment': this.criteria.comment ? this.criteria.comment : environment.emptyForExport ,
            'Date review Min': this.criteria.dateReviewFrom ? this.datePipe.transform(this.criteria.dateReviewFrom , this.dateFormat) : environment.emptyForExport ,
            'Date review Max': this.criteria.dateReviewTo ? this.datePipe.transform(this.criteria.dateReviewTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
