import {Component, OnInit} from '@angular/core';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionCriteria} from 'src/app/shared/criteria/quiz/QuestionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-question-list-admin',
  templateUrl: './question-list-admin.component.html',
    styleUrls : ['./question-list-admin.component.css']
})
export class QuestionListAdminComponent extends AbstractListController<QuestionDto, QuestionCriteria, QuestionAdminService>  implements OnInit {

    override fileName = 'Question';


    typeDeQuestions: Array<TypeDeQuestionDto>;
    quizs: Array<QuizDto>;
    homeWorks: Array<HomeWorkDto>;
    typeReponse: MenuItem[] ;

    get reponseCourte(): boolean {
        return this.reponseService.reponseCourte;
    }
    set reponseCourte(value: boolean) {
        this.reponseService.reponseCourte = value;
    }
    get paragraphe(): boolean {
        return this.reponseService.paragraphe;
    }

    set paragraphe(value: boolean) {
        this.reponseService.paragraphe = value;
    }

    get caseAcoche(): boolean {
        return this.reponseService.caseAcoche;
    }

    set caseAcoche(value: boolean) {
        this.reponseService.caseAcoche = value;
    }

    get choixMultiple(): boolean {
        return this.reponseService.choixMultiple;
    }

    set choixMultiple(value: boolean) {
        this.reponseService.choixMultiple = value;
    }


    constructor( private questionService: QuestionAdminService  , private quizService: QuizAdminService, private typeDeQuestionService: TypeDeQuestionAdminService, private reponseService: ReponseAdminService, private homeWorkService: HomeWorkAdminService) {
        super(questionService);
        this.typeReponse = [
            {
                label: 'Reponse Courte',
                icon: 'pi pi-align-right',
                command: () => {
                this.reponseCourte = true;
                }
            },
            {
                label: 'Paragraphe',
                icon: 'pi pi-align-left',
                command: () => {

                }
            },
            { separator: true },
            {
                label: 'Choix multiples',
                icon: 'pi pi-circle',
                command: () => {

                }
            },

            {
                label: 'Cases a cocher',
                icon: 'pi pi-check-square',
                command: () => {

                }

            }
        ];

    }


    ngOnInit(): void {
        this.activateSecurityConstraint('Question').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadTypeDeQuestion();
                this.loadQuiz();
                this.loadHomeWork();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'urlImg', header: 'Url img'},
            {field: 'urlVideo', header: 'Url video'},
            {field: 'numero', header: 'Numero'},
            {field: 'pointReponseJuste', header: 'Point reponse juste'},
            {field: 'pointReponsefausse', header: 'Point reponsefausse'},
            {field: 'typeDeQuestion?.lib', header: 'Type de question'},
            {field: 'quiz?.lib', header: 'Quiz'},
            {field: 'homeWork?.libelle', header: 'Home work'},
        ];
    }


    public async loadTypeDeQuestion(){
       this.typeDeQuestionService.findAllOptimized().subscribe(typeDeQuestions => this.typeDeQuestions = typeDeQuestions, error => console.log(error))
    }
    public async loadQuiz(){
       this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs, error => console.log(error))
    }
    public async loadHomeWork(){
       this.homeWorkService.findAllOptimized().subscribe(homeWorks => this.homeWorks = homeWorks, error => console.log(error))
    }

	public override initDuplicate(res: QuestionDto) {
        if (res.reponses != null) {
             res.reponses.forEach(d => { d.question = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Url img': e.urlImg ,
                 'Url video': e.urlVideo ,
                 'Numero': e.numero ,
                 'Point reponse juste': e.pointReponseJuste ,
                 'Point reponsefausse': e.pointReponsefausse ,
                'Type de question': e.typeDeQuestion?.lib ,
                'Quiz': e.quiz?.lib ,
                'Home work': e.homeWork?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Url img': this.criteria.urlImg ? this.criteria.urlImg : environment.emptyForExport ,
            'Url video': this.criteria.urlVideo ? this.criteria.urlVideo : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
            'Point reponse juste Min': this.criteria.pointReponseJusteMin ? this.criteria.pointReponseJusteMin : environment.emptyForExport ,
            'Point reponse juste Max': this.criteria.pointReponseJusteMax ? this.criteria.pointReponseJusteMax : environment.emptyForExport ,
            'Point reponsefausse Min': this.criteria.pointReponsefausseMin ? this.criteria.pointReponsefausseMin : environment.emptyForExport ,
            'Point reponsefausse Max': this.criteria.pointReponsefausseMax ? this.criteria.pointReponsefausseMax : environment.emptyForExport ,
        //'Type de question': this.criteria.typeDeQuestion?.lib ? this.criteria.typeDeQuestion?.lib : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
        //'Home work': this.criteria.homeWork?.libelle ? this.criteria.homeWork?.libelle : environment.emptyForExport ,
        }];
      }
}
