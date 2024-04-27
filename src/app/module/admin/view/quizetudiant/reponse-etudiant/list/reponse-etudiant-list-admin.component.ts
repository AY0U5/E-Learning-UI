import {Component, OnInit} from '@angular/core';
import {ReponseEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/ReponseEtudiantAdmin.service';
import {ReponseEtudiantDto} from 'src/app/shared/model/quizetudiant/ReponseEtudiant.model';
import {ReponseEtudiantCriteria} from 'src/app/shared/criteria/quizetudiant/ReponseEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {QuizEtudiantDto} from 'src/app/shared/model/quizetudiant/QuizEtudiant.model';
import {QuizEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/QuizEtudiantAdmin.service';
import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';


@Component({
  selector: 'app-reponse-etudiant-list-admin',
  templateUrl: './reponse-etudiant-list-admin.component.html'
})
export class ReponseEtudiantListAdminComponent extends AbstractListController<ReponseEtudiantDto, ReponseEtudiantCriteria, ReponseEtudiantAdminService>  implements OnInit {

    override fileName = 'ReponseEtudiant';


    reponses: Array<ReponseDto>;
    quizEtudiants: Array<QuizEtudiantDto>;
    questions: Array<QuestionDto>;


    constructor( private reponseEtudiantService: ReponseEtudiantAdminService  , private quizEtudiantService: QuizEtudiantAdminService, private questionService: QuestionAdminService, private reponseService: ReponseAdminService) {
        super(reponseEtudiantService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ReponseEtudiant').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadReponse();
                this.loadQuizEtudiant();
                this.loadQuestion();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'reponse?.lib', header: 'Reponse'},
            {field: 'answer', header: 'Answer'},
            {field: 'quizEtudiant?.ref', header: 'Quiz etudiant'},
            {field: 'note', header: 'Note'},
            {field: 'question?.libelle', header: 'Question'},
        ];
    }


    public async loadReponse(){
       this.reponseService.findAllOptimized().subscribe(reponses => this.reponses = reponses, error => console.log(error))
    }
    public async loadQuizEtudiant(){
       this.quizEtudiantService.findAllOptimized().subscribe(quizEtudiants => this.quizEtudiants = quizEtudiants, error => console.log(error))
    }
    public async loadQuestion(){
       this.questionService.findAllOptimized().subscribe(questions => this.questions = questions, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                'Reponse': e.reponse?.lib ,
                 'Answer': e.answer ,
                'Quiz etudiant': e.quizEtudiant?.ref ,
                 'Note': e.note ,
                'Question': e.question?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Reponse': this.criteria.reponse?.lib ? this.criteria.reponse?.lib : environment.emptyForExport ,
            'Answer': this.criteria.answer ? this.criteria.answer : environment.emptyForExport ,
        //'Quiz etudiant': this.criteria.quizEtudiant?.ref ? this.criteria.quizEtudiant?.ref : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
        //'Question': this.criteria.question?.libelle ? this.criteria.question?.libelle : environment.emptyForExport ,
        }];
      }
}
