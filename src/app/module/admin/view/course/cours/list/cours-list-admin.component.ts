import {Component, OnInit} from '@angular/core';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursCriteria} from 'src/app/shared/criteria/course/CoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {CategorieSectionDto} from 'src/app/shared/model/courseref/CategorieSection.model';
import {CategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/CategorieSectionAdmin.service';
import {HomeWorkEtudiantDto} from 'src/app/shared/model/homework/HomeWorkEtudiant.model';
import {HomeWorkEtudiantAdminService} from 'src/app/shared/service/admin/homework/HomeWorkEtudiantAdmin.service';
import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';
import {EtatCoursDto} from 'src/app/shared/model/courseref/EtatCours.model';
import {EtatCoursAdminService} from 'src/app/shared/service/admin/courseref/EtatCoursAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
import {TypeHomeWorkDto} from 'src/app/shared/model/homework/TypeHomeWork.model';
import {TypeHomeWorkAdminService} from 'src/app/shared/service/admin/homework/TypeHomeWorkAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
import {SectionItemDto} from 'src/app/shared/model/course/SectionItem.model';
import {SectionItemAdminService} from 'src/app/shared/service/admin/course/SectionItemAdmin.service';
import {TranslatePipe} from "@ngx-translate/core";


@Component({
  selector: 'app-cours-list-admin',
  templateUrl: './cours-list-admin.component.html',
  styleUrls: ['./cours-list-admin.component.css']
})
export class CoursListAdminComponent extends AbstractListController<CoursDto, CoursCriteria, CoursAdminService>  implements OnInit {

    override fileName = 'Cours';


    etatCourss: Array<EtatCoursDto>;
    parcourss: Array<ParcoursDto>;
    cours: Array<CoursDto>;

    constructor( private coursService: CoursAdminService  , private parcoursService: ParcoursAdminService, private categorieSectionService: CategorieSectionAdminService, private etatCoursService: EtatCoursAdminService, private sectionService: SectionAdminService, private typeHomeWorkService: TypeHomeWorkAdminService, private homeWorkService: HomeWorkAdminService) {
        super(coursService);
    }

    public findAllCours(){
        return this.coursService.findAll().subscribe(data => this.cours = data);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Cours').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtatCours();
                this.loadParcours();
            }
        });
        this.findAllCours()
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'image', header: 'Image'},
            {field: 'etatCours?.libelle', header: 'Etat cours'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'nombreSectionFinalise', header: 'Nombre section finalise'},
            {field: 'nombreSectionEnCours', header: 'Nombre section en cours'},
            {field: 'nombreLinkEnCours', header: 'Nombre link en cours'},
            {field: 'nombreLinkFinalise', header: 'Nombre link finalise'},
            {field: 'numeroOrder', header: 'Numero order'},
        ];
    }


    public async loadEtatCours(){
       this.etatCoursService.findAllOptimized().subscribe(etatCourss => this.etatCourss = etatCourss, error => console.log(error))
    }
    public async loadParcours(){
       this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss, error => console.log(error))
    }

	public override initDuplicate(res: CoursDto) {
        if (res.sections != null) {
             res.sections.forEach(d => { d.cours = null; d.id = null; });
        }
        if (res.homeWorks != null) {
             res.homeWorks.forEach(d => { d.cours = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                 'Image': e.image ,
                'Etat cours': e.etatCours?.libelle ,
                'Parcours': e.parcours?.libelle ,
                 'Nombre section finalise': e.nombreSectionFinalise ,
                 'Nombre section en cours': e.nombreSectionEnCours ,
                 'Nombre link en cours': e.nombreLinkEnCours ,
                 'Nombre link finalise': e.nombreLinkFinalise ,
                 'Numero order': e.numeroOrder ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Image': this.criteria.image ? this.criteria.image : environment.emptyForExport ,
        //'Etat cours': this.criteria.etatCours?.libelle ? this.criteria.etatCours?.libelle : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
            'Nombre section finalise Min': this.criteria.nombreSectionFinaliseMin ? this.criteria.nombreSectionFinaliseMin : environment.emptyForExport ,
            'Nombre section finalise Max': this.criteria.nombreSectionFinaliseMax ? this.criteria.nombreSectionFinaliseMax : environment.emptyForExport ,
            'Nombre section en cours Min': this.criteria.nombreSectionEnCoursMin ? this.criteria.nombreSectionEnCoursMin : environment.emptyForExport ,
            'Nombre section en cours Max': this.criteria.nombreSectionEnCoursMax ? this.criteria.nombreSectionEnCoursMax : environment.emptyForExport ,
            'Nombre link en cours Min': this.criteria.nombreLinkEnCoursMin ? this.criteria.nombreLinkEnCoursMin : environment.emptyForExport ,
            'Nombre link en cours Max': this.criteria.nombreLinkEnCoursMax ? this.criteria.nombreLinkEnCoursMax : environment.emptyForExport ,
            'Nombre link finalise Min': this.criteria.nombreLinkFinaliseMin ? this.criteria.nombreLinkFinaliseMin : environment.emptyForExport ,
            'Nombre link finalise Max': this.criteria.nombreLinkFinaliseMax ? this.criteria.nombreLinkFinaliseMax : environment.emptyForExport ,
            'Numero order Min': this.criteria.numeroOrderMin ? this.criteria.numeroOrderMin : environment.emptyForExport ,
            'Numero order Max': this.criteria.numeroOrderMax ? this.criteria.numeroOrderMax : environment.emptyForExport ,
        }];
      }
}
