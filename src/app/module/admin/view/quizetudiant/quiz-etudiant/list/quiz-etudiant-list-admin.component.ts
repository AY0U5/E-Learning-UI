import {Component, OnInit} from '@angular/core';
import {QuizEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/QuizEtudiantAdmin.service';
import {QuizEtudiantDto} from 'src/app/shared/model/quizetudiant/QuizEtudiant.model';
import {QuizEtudiantCriteria} from 'src/app/shared/criteria/quizetudiant/QuizEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {ReponseEtudiantDto} from 'src/app/shared/model/quizetudiant/ReponseEtudiant.model';
import {ReponseEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/ReponseEtudiantAdmin.service';
import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';


@Component({
  selector: 'app-quiz-etudiant-list-admin',
  templateUrl: './quiz-etudiant-list-admin.component.html'
})
export class QuizEtudiantListAdminComponent extends AbstractListController<QuizEtudiantDto, QuizEtudiantCriteria, QuizEtudiantAdminService>  implements OnInit {

    override fileName = 'QuizEtudiant';


    etudiants: Array<EtudiantDto>;
    quizs: Array<QuizDto>;


    constructor( private quizEtudiantService: QuizEtudiantAdminService  , private quizService: QuizAdminService, private etudiantService: EtudiantAdminService, private reponseEtudiantService: ReponseEtudiantAdminService, private questionService: QuestionAdminService, private reponseService: ReponseAdminService) {
        super(quizEtudiantService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('QuizEtudiant').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
                this.loadQuiz();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'quiz?.lib', header: 'Quiz'},
            {field: 'note', header: 'Note'},
            {field: 'resultat', header: 'Resultat'},
            {field: 'questionCurrent', header: 'Question current'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }
    public async loadQuiz(){
       this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs, error => console.log(error))
    }

	public override initDuplicate(res: QuizEtudiantDto) {
        if (res.reponseEtudiants != null) {
             res.reponseEtudiants.forEach(d => { d.quizEtudiant = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                'Etudiant': e.etudiant?.ref ,
                'Quiz': e.quiz?.lib ,
                 'Note': e.note ,
                 'Resultat': e.resultat ,
                 'Question current': e.questionCurrent ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
            'Resultat': this.criteria.resultat ? this.criteria.resultat : environment.emptyForExport ,
            'Question current Min': this.criteria.questionCurrentMin ? this.criteria.questionCurrentMin : environment.emptyForExport ,
            'Question current Max': this.criteria.questionCurrentMax ? this.criteria.questionCurrentMax : environment.emptyForExport ,
        }];
      }
}
