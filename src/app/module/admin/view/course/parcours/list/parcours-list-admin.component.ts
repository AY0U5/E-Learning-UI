import {Component, OnInit} from '@angular/core';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursCriteria} from 'src/app/shared/criteria/course/ParcoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {QuizEtudiantDto} from 'src/app/shared/model/quizetudiant/QuizEtudiant.model';
import {QuizEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/QuizEtudiantAdmin.service';
import {EtatEtudiantScheduleDto} from 'src/app/shared/model/inscriptionref/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatEtudiantScheduleAdmin.service';
import {InteretEtudiantDto} from 'src/app/shared/model/inscriptionref/InteretEtudiant.model';
import {InteretEtudiantAdminService} from 'src/app/shared/service/admin/inscriptionref/InteretEtudiantAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {StatutSocialDto} from 'src/app/shared/model/inscriptionref/StatutSocial.model';
import {StatutSocialAdminService} from 'src/app/shared/service/admin/inscriptionref/StatutSocialAdmin.service';
import {LangueDto} from 'src/app/shared/model/inscriptionref/Langue.model';
import {LangueAdminService} from 'src/app/shared/service/admin/inscriptionref/LangueAdmin.service';
import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {EtatCoursDto} from 'src/app/shared/model/courseref/EtatCours.model';
import {EtatCoursAdminService} from 'src/app/shared/service/admin/courseref/EtatCoursAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
import {CentreDto} from 'src/app/shared/model/courseref/Centre.model';
import {CentreAdminService} from 'src/app/shared/service/admin/courseref/CentreAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudeAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
import {SkillDto} from 'src/app/shared/model/inscriptionref/Skill.model';
import {SkillAdminService} from 'src/app/shared/service/admin/inscriptionref/SkillAdmin.service';
import {FonctionDto} from 'src/app/shared/model/inscriptionref/Fonction.model';
import {FonctionAdminService} from 'src/app/shared/service/admin/inscriptionref/FonctionAdmin.service';
import {PackStudentDto} from 'src/app/shared/model/pack/PackStudent.model';
import {PackStudentAdminService} from 'src/app/shared/service/admin/pack/PackStudentAdmin.service';
import {GroupeEtudiantDetailDto} from 'src/app/shared/model/grpe/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantDetailAdmin.service';
import {TeacherLocalityDto} from 'src/app/shared/model/inscriptionref/TeacherLocality.model';
import {TeacherLocalityAdminService} from 'src/app/shared/service/admin/inscriptionref/TeacherLocalityAdmin.service';
import {NiveauEtudeDto} from 'src/app/shared/model/inscriptionref/NiveauEtude.model';
import {NiveauEtudeAdminService} from 'src/app/shared/service/admin/inscriptionref/NiveauEtudeAdmin.service';
import {EtatParcoursDto} from "../../../../../../shared/model/courseref/EtatParcours.model";
import {EtatParcoursAdminService} from "../../../../../../shared/service/admin/courseref/EtatParcoursAdmin.service";
import {TranslatePipe} from "@ngx-translate/core";


@Component({

  selector: 'app-parcours-list-admin',
  templateUrl: './parcours-list-admin.component.html',
    styleUrls : ['./parcours-list-admin.component.css']
})
export class ParcoursListAdminComponent extends AbstractListController<ParcoursDto, ParcoursCriteria, ParcoursAdminService>  implements OnInit {

    // Filtered list of items
    filteredItems: ParcoursDto[] = [];
    data: ParcoursDto[] = [];


    filterGlobal(searchTerm: string) {
        if (!searchTerm) {
            this.filteredItems = [...this.items];
            return;
        }

        searchTerm = searchTerm.toLowerCase();

        this.filteredItems = this.items.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm)
            )
        );
    }


    //
    get showCours(): boolean {
        return this.coursService.showCours;
    }

    set showCours(value: boolean) {
        this.coursService.showCours = value;
    }
    get showSection(): boolean {
        return this.sectionAdminService.showSection;
    }

    set showSection(value: boolean) {
        this.sectionAdminService.showSection = value;
    }

    get itemsCours(): Array<CoursDto> {
        return this.coursService.itemsCours;
    }

    set itemsCours(value: Array<CoursDto>) {
        this.coursService.itemsCours = value;
    }
    get viewcoursOk(): boolean {
        return this.coursService.viewcoursOk;
    }

    set viewcoursOk(value: boolean) {
        this.coursService.viewcoursOk = value;
    }
    /*public async viewCourss(dto: ParcoursDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.itemsCours = res.courss;
            this.viewcoursOk = true;
            this.item = dto;
            console.log(this.service.item);
        });*/
    public async viewCourss(dto: ParcoursDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.itemsCours = this.item.courss ;
            this.viewcoursOk = true;
            // this.itemParcour = dto;
            this.itemParcour=this.item;
            // console.log(this.service.item);
        });


        // this.viewcoursOk = true;
        // console.log(this.viewcoursOk);
        // // console.log(element.courss);
        // this.coursService.findByParcourId(element.id).subscribe( res =>
        //     this.itemsCours = res
        // )
        // console.log(this.itemsCours);
        this.showCours = true ;
        this.showSection = false;
    }


    set itemParcour(value: ParcoursDto) {
        this.service.itemParcour = value;
    }
    get itemParcour():  ParcoursDto {
        return this.service.itemParcour;
    }
    parcourview(dto: ParcoursDto) {
       this.itemParcour = dto ;
       console.log(this.itemParcour);
    }


    //

    override fileName = 'Parcours';

    etatParcourss: Array<EtatParcoursDto>;
    centres: Array<CentreDto>;


    constructor(private  sectionAdminService:SectionAdminService,private etatParcoursService: EtatParcoursAdminService, private parcoursService: ParcoursAdminService  , private etatEtudiantScheduleService: EtatEtudiantScheduleAdminService, private interetEtudiantService: InteretEtudiantAdminService, private etudiantService: EtudiantAdminService, private statutSocialService: StatutSocialAdminService, private groupeEtudiantService: GroupeEtudiantAdminService, private langueService: LangueAdminService, private etatCoursService: EtatCoursAdminService, private centreService: CentreAdminService, private coursService: CoursAdminService, private groupeEtudeService: GroupeEtudeAdminService, private skillService: SkillAdminService, private fonctionService: FonctionAdminService, private packStudentService: PackStudentAdminService, private teacherLocalityService: TeacherLocalityAdminService, private niveauEtudeService: NiveauEtudeAdminService) {
        super(parcoursService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Parcours').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtatParcours();
                this.loadCentre();

            }
        });
        this.parcoursService.findAll().subscribe((data: ParcoursDto[]) => {
            this.data = data;
            // Initialize filteredItems with the same data as items
            this.filteredItems = [...this.data];
        });

    }


    public override  initCol() {
        this.cols = [
            {field: 'datePublication', header: 'Date publication'},
            {field: 'dateCreation', header: 'Date creation'},
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'numeroOrder', header: 'Numero order'},
            {field: 'nombreCours', header: 'Nombre cours'},
            {field: 'etatParcours?.libelle', header: 'Etat parcours'},
            {field: 'centre?.ref', header: 'Centre'},
        ];
    }
    public async loadEtatParcours(){
        this.etatParcoursService.findAllOptimized().subscribe(etatParcourss => this.etatParcourss = etatParcourss, error => console.log(error))
    }

    public async loadCentre(){
       this.centreService.findAllOptimized().subscribe(centres => this.centres = centres, error => console.log(error))
    }

	public override initDuplicate(res: ParcoursDto) {
        if (res.courss != null) {
             res.courss.forEach(d => { d.parcours = null; d.id = null; });
        }
        if (res.etudiants != null) {
             res.etudiants.forEach(d => { d.parcours = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Date publication': this.datePipe.transform(e.datePublication , 'dd/MM/yyyy hh:mm'),
                'Date creation': this.datePipe.transform(e.dateCreation , 'dd/MM/yyyy hh:mm'),
                 'Description': e.description ,
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Numero order': e.numeroOrder ,
                 'Nombre cours': e.nombreCours ,
                'Etat parcours': e.etatParcours?.libelle ,
                'Centre': e.centre?.ref ,
            }
        });

        this.criteriaData = [{
            'Date publication Min': this.criteria.datePublicationFrom ? this.datePipe.transform(this.criteria.datePublicationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date publication Max': this.criteria.datePublicationTo ? this.datePipe.transform(this.criteria.datePublicationTo , this.dateFormat) : environment.emptyForExport ,
            'Date creation Min': this.criteria.dateCreationFrom ? this.datePipe.transform(this.criteria.dateCreationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.criteria.dateCreationTo ? this.datePipe.transform(this.criteria.dateCreationTo , this.dateFormat) : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Numero order Min': this.criteria.numeroOrderMin ? this.criteria.numeroOrderMin : environment.emptyForExport ,
            'Numero order Max': this.criteria.numeroOrderMax ? this.criteria.numeroOrderMax : environment.emptyForExport ,
            'Nombre cours Min': this.criteria.nombreCoursMin ? this.criteria.nombreCoursMin : environment.emptyForExport ,
            'Nombre cours Max': this.criteria.nombreCoursMax ? this.criteria.nombreCoursMax : environment.emptyForExport ,
        //'Centre': this.criteria.centre?.ref ? this.criteria.centre?.ref : environment.emptyForExport ,
        }];
      }



}
