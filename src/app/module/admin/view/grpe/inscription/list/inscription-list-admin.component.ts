import {Component, OnInit} from '@angular/core';
import {InscriptionAdminService} from 'src/app/shared/service/admin/grpe/InscriptionAdmin.service';
import {InscriptionDto} from 'src/app/shared/model/grpe/Inscription.model';
import {InscriptionCriteria} from 'src/app/shared/criteria/grpe/InscriptionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {SkillDto} from 'src/app/shared/model/inscriptionref/Skill.model';
import {SkillAdminService} from 'src/app/shared/service/admin/inscriptionref/SkillAdmin.service';
import {InteretEtudiantDto} from 'src/app/shared/model/inscriptionref/InteretEtudiant.model';
import {InteretEtudiantAdminService} from 'src/app/shared/service/admin/inscriptionref/InteretEtudiantAdmin.service';
import {FonctionDto} from 'src/app/shared/model/inscriptionref/Fonction.model';
import {FonctionAdminService} from 'src/app/shared/service/admin/inscriptionref/FonctionAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {EtatInscriptionDto} from 'src/app/shared/model/inscriptionref/EtatInscription.model';
import {EtatInscriptionAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatInscriptionAdmin.service';
import {GroupeTypeDto} from 'src/app/shared/model/grpe/GroupeType.model';
import {GroupeTypeAdminService} from 'src/app/shared/service/admin/grpe/GroupeTypeAdmin.service';
import {StatutSocialDto} from 'src/app/shared/model/inscriptionref/StatutSocial.model';
import {StatutSocialAdminService} from 'src/app/shared/service/admin/inscriptionref/StatutSocialAdmin.service';
import {PackStudentDto} from 'src/app/shared/model/pack/PackStudent.model';
import {PackStudentAdminService} from 'src/app/shared/service/admin/pack/PackStudentAdmin.service';
import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudeAdmin.service';
import {NiveauEtudeDto} from 'src/app/shared/model/inscriptionref/NiveauEtude.model';
import {NiveauEtudeAdminService} from 'src/app/shared/service/admin/inscriptionref/NiveauEtudeAdmin.service';


@Component({
  selector: 'app-inscription-list-admin',
  templateUrl: './inscription-list-admin.component.html'
})
export class InscriptionListAdminComponent extends AbstractListController<InscriptionDto, InscriptionCriteria, InscriptionAdminService>  implements OnInit {

    override fileName = 'Inscription';


     yesOrNoQuizFinished: any[] = [];
    etudiants: Array<EtudiantDto>;
    etatInscriptions: Array<EtatInscriptionDto>;
    parcourss: Array<ParcoursDto>;
    groupeEtudes: Array<GroupeEtudeDto>;
    groupeTypes: Array<GroupeTypeDto>;
    statutSocials: Array<StatutSocialDto>;
    interetEtudiants: Array<InteretEtudiantDto>;
    niveauEtudes: Array<NiveauEtudeDto>;
    fonctions: Array<FonctionDto>;
    quizs: Array<QuizDto>;
    packStudents: Array<PackStudentDto>;
    skills: Array<SkillDto>;


    constructor( private inscriptionService: InscriptionAdminService  , private parcoursService: ParcoursAdminService, private quizService: QuizAdminService, private skillService: SkillAdminService, private interetEtudiantService: InteretEtudiantAdminService, private fonctionService: FonctionAdminService, private etudiantService: EtudiantAdminService, private etatInscriptionService: EtatInscriptionAdminService, private groupeTypeService: GroupeTypeAdminService, private statutSocialService: StatutSocialAdminService, private packStudentService: PackStudentAdminService, private groupeEtudeService: GroupeEtudeAdminService, private niveauEtudeService: NiveauEtudeAdminService) {
        super(inscriptionService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Inscription').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
                this.loadEtatInscription();
                this.loadParcours();
                this.loadGroupeEtude();
                this.loadGroupeType();
                this.loadStatutSocial();
                this.loadInteretEtudiant();
                this.loadNiveauEtude();
                this.loadFonction();
                this.loadQuiz();
                this.loadPackStudent();
                this.loadSkill();
                this.yesOrNoQuizFinished =  [{label: 'QuizFinished', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'numeroInscription', header: 'Numero inscription'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'etatInscription?.libelle', header: 'Etat inscription'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'groupeEtude?.libelle', header: 'Groupe etude'},
            {field: 'groupeType?.libelle', header: 'Groupe type'},
            {field: 'statutSocial?.libelle', header: 'Statut social'},
            {field: 'interetEtudiant?.libelle', header: 'Interet etudiant'},
            {field: 'niveauEtude?.libelle', header: 'Niveau etude'},
            {field: 'fonction?.libelle', header: 'Fonction'},
            {field: 'quiz?.lib', header: 'Quiz'},
            {field: 'noteQuizNiveau', header: 'Note quiz niveau'},
            {field: 'quizFinished', header: 'Quiz finished'},
            {field: 'dateRegistration', header: 'Date registration'},
            {field: 'datedebutinscription', header: 'Datedebutinscription'},
            {field: 'datefininscription', header: 'Datefininscription'},
            {field: 'packStudent?.libelle', header: 'Pack student'},
            {field: 'skill?.libelle', header: 'Skill'},
            {field: 'skype', header: 'Skype'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }
    public async loadEtatInscription(){
       this.etatInscriptionService.findAllOptimized().subscribe(etatInscriptions => this.etatInscriptions = etatInscriptions, error => console.log(error))
    }
    public async loadParcours(){
       this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss, error => console.log(error))
    }
    public async loadGroupeEtude(){
       this.groupeEtudeService.findAllOptimized().subscribe(groupeEtudes => this.groupeEtudes = groupeEtudes, error => console.log(error))
    }
    public async loadGroupeType(){
       this.groupeTypeService.findAllOptimized().subscribe(groupeTypes => this.groupeTypes = groupeTypes, error => console.log(error))
    }
    public async loadStatutSocial(){
       this.statutSocialService.findAllOptimized().subscribe(statutSocials => this.statutSocials = statutSocials, error => console.log(error))
    }
    public async loadInteretEtudiant(){
       this.interetEtudiantService.findAllOptimized().subscribe(interetEtudiants => this.interetEtudiants = interetEtudiants, error => console.log(error))
    }
    public async loadNiveauEtude(){
       this.niveauEtudeService.findAllOptimized().subscribe(niveauEtudes => this.niveauEtudes = niveauEtudes, error => console.log(error))
    }
    public async loadFonction(){
       this.fonctionService.findAllOptimized().subscribe(fonctions => this.fonctions = fonctions, error => console.log(error))
    }
    public async loadQuiz(){
       this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs, error => console.log(error))
    }
    public async loadPackStudent(){
       this.packStudentService.findAllOptimized().subscribe(packStudents => this.packStudents = packStudents, error => console.log(error))
    }
    public async loadSkill(){
       this.skillService.findAllOptimized().subscribe(skills => this.skills = skills, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Numero inscription': e.numeroInscription ,
                'Etudiant': e.etudiant?.ref ,
                'Etat inscription': e.etatInscription?.libelle ,
                'Parcours': e.parcours?.libelle ,
                'Groupe etude': e.groupeEtude?.libelle ,
                'Groupe type': e.groupeType?.libelle ,
                'Statut social': e.statutSocial?.libelle ,
                'Interet etudiant': e.interetEtudiant?.libelle ,
                'Niveau etude': e.niveauEtude?.libelle ,
                'Fonction': e.fonction?.libelle ,
                'Quiz': e.quiz?.lib ,
                 'Note quiz niveau': e.noteQuizNiveau ,
                'Quiz finished': e.quizFinished? 'Vrai' : 'Faux' ,
                 'Date registration': e.dateRegistration ,
                'Datedebutinscription': this.datePipe.transform(e.datedebutinscription , 'dd/MM/yyyy hh:mm'),
                'Datefininscription': this.datePipe.transform(e.datefininscription , 'dd/MM/yyyy hh:mm'),
                'Pack student': e.packStudent?.libelle ,
                'Skill': e.skill?.libelle ,
                 'Skype': e.skype ,
            }
        });

        this.criteriaData = [{
            'Numero inscription Min': this.criteria.numeroInscriptionMin ? this.criteria.numeroInscriptionMin : environment.emptyForExport ,
            'Numero inscription Max': this.criteria.numeroInscriptionMax ? this.criteria.numeroInscriptionMax : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Etat inscription': this.criteria.etatInscription?.libelle ? this.criteria.etatInscription?.libelle : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        //'Groupe etude': this.criteria.groupeEtude?.libelle ? this.criteria.groupeEtude?.libelle : environment.emptyForExport ,
        //'Groupe type': this.criteria.groupeType?.libelle ? this.criteria.groupeType?.libelle : environment.emptyForExport ,
        //'Statut social': this.criteria.statutSocial?.libelle ? this.criteria.statutSocial?.libelle : environment.emptyForExport ,
        //'Interet etudiant': this.criteria.interetEtudiant?.libelle ? this.criteria.interetEtudiant?.libelle : environment.emptyForExport ,
        //'Niveau etude': this.criteria.niveauEtude?.libelle ? this.criteria.niveauEtude?.libelle : environment.emptyForExport ,
        //'Fonction': this.criteria.fonction?.libelle ? this.criteria.fonction?.libelle : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
            'Note quiz niveau Min': this.criteria.noteQuizNiveauMin ? this.criteria.noteQuizNiveauMin : environment.emptyForExport ,
            'Note quiz niveau Max': this.criteria.noteQuizNiveauMax ? this.criteria.noteQuizNiveauMax : environment.emptyForExport ,
            'Quiz finished': this.criteria.quizFinished ? (this.criteria.quizFinished ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date registration': this.criteria.dateRegistration ? this.criteria.dateRegistration : environment.emptyForExport ,
            'Datedebutinscription Min': this.criteria.datedebutinscriptionFrom ? this.datePipe.transform(this.criteria.datedebutinscriptionFrom , this.dateFormat) : environment.emptyForExport ,
            'Datedebutinscription Max': this.criteria.datedebutinscriptionTo ? this.datePipe.transform(this.criteria.datedebutinscriptionTo , this.dateFormat) : environment.emptyForExport ,
            'Datefininscription Min': this.criteria.datefininscriptionFrom ? this.datePipe.transform(this.criteria.datefininscriptionFrom , this.dateFormat) : environment.emptyForExport ,
            'Datefininscription Max': this.criteria.datefininscriptionTo ? this.datePipe.transform(this.criteria.datefininscriptionTo , this.dateFormat) : environment.emptyForExport ,
        //'Pack student': this.criteria.packStudent?.libelle ? this.criteria.packStudent?.libelle : environment.emptyForExport ,
        //'Skill': this.criteria.skill?.libelle ? this.criteria.skill?.libelle : environment.emptyForExport ,
            'Skype': this.criteria.skype ? this.criteria.skype : environment.emptyForExport ,
        }];
      }
}
