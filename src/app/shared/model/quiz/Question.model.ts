import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuizDto} from './Quiz.model';
import {TypeDeQuestionDto} from '../quizref/TypeDeQuestion.model';
import {ReponseDto} from './Reponse.model';
import {HomeWorkDto} from '../homework/HomeWork.model';

export class QuestionDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public urlImg: string;

    public urlVideo: string;

    public numero: null | number;

    public pointReponseJuste: null | number;

    public pointReponsefausse: null | number;

    public typeDeQuestion: TypeDeQuestionDto ;
    public quiz: QuizDto ;
    public homeWork: HomeWorkDto ;
     public reponses: Array<ReponseDto>;
    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';
        this.urlImg = '';
        this.urlVideo = '';
        this.numero = null;
        this.pointReponseJuste = null;
        this.pointReponsefausse = null;
        this.typeDeQuestion = new TypeDeQuestionDto() ;
        this.homeWork = new HomeWorkDto() ;
        this.reponses = new Array<ReponseDto>();

        }

}
