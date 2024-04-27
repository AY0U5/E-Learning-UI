import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuizEtudiantDto} from './QuizEtudiant.model';
import {QuestionDto} from '../quiz/Question.model';
import {ReponseDto} from '../quiz/Reponse.model';

export class ReponseEtudiantDto extends BaseDto{

    public ref: string;

    public answer: string;

    public note: null | number;

    public reponse: ReponseDto ;
    public quizEtudiant: QuizEtudiantDto ;
    public question: QuestionDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.answer = '';
        this.note = null;

        }

}
