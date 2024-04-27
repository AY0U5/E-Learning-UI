import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuizEtudiantDto} from '../quizetudiant/QuizEtudiant.model';
import {QuestionDto} from './Question.model';
import {SectionDto} from '../course/Section.model';

export class QuizDto extends BaseDto{

    public ref: string;

    public lib: string;

   public dateDebut: Date;

   public dateFin: Date;

    public numero: null | number;

    public seuilReussite: null | number;

    public section: SectionDto ;
     public questions: Array<QuestionDto>;
     public quizEtudiants: Array<QuizEtudiantDto>;
    

    constructor() {
        super();

        this.ref = '';
        this.lib = '';
        this.dateDebut = null;
        this.dateFin = null;
        this.numero = null;
        this.seuilReussite = null;
        this.questions = new Array<QuestionDto>();
        this.quizEtudiants = new Array<QuizEtudiantDto>();

        }

}
