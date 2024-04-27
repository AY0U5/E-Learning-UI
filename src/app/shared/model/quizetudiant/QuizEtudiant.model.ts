import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuizDto} from '../quiz/Quiz.model';
import {EtudiantDto} from '../inscription/Etudiant.model';
import {ReponseEtudiantDto} from './ReponseEtudiant.model';

export class QuizEtudiantDto extends BaseDto{

    public ref: string;

    public note: null | number;

    public resultat: string;

    public questionCurrent: null | number;

    public etudiant: EtudiantDto ;
    public quiz: QuizDto ;
     public reponseEtudiants: Array<ReponseEtudiantDto>;
    

    constructor() {
        super();

        this.ref = '';
        this.note = null;
        this.resultat = '';
        this.questionCurrent = null;
        this.etudiant = new EtudiantDto() ;
        this.quiz = new QuizDto() ;
        this.reponseEtudiants = new Array<ReponseEtudiantDto>();

        }

}
