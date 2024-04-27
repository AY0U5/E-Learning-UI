import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {QuizEtudiantCriteria} from './QuizEtudiantCriteria.model';
import {QuestionCriteria} from '../quiz/QuestionCriteria.model';
import {ReponseCriteria} from '../quiz/ReponseCriteria.model';

export class ReponseEtudiantCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public answer: string;
    public answerLike: string;
     public note: number;
     public noteMin: number;
     public noteMax: number;

}
