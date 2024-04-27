import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {QuizEtudiantCriteria} from '../quizetudiant/QuizEtudiantCriteria.model';
import {QuestionCriteria} from './QuestionCriteria.model';
import {SectionCriteria} from '../course/SectionCriteria.model';

export class QuizCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public lib: string;
    public libLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
     public numero: number;
     public numeroMin: number;
     public numeroMax: number;
     public seuilReussite: number;
     public seuilReussiteMin: number;
     public seuilReussiteMax: number;
      public questions: Array<QuestionCriteria>;
      public quizEtudiants: Array<QuizEtudiantCriteria>;

}
