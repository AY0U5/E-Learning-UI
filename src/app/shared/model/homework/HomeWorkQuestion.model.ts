import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {HoweWorkQSTReponseDto} from './HoweWorkQSTReponse.model';
import {TypeDeQuestionDto} from '../quizref/TypeDeQuestion.model';
import {HomeWorkDto} from './HomeWork.model';

export class HomeWorkQuestionDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public numero: null | number;

    public pointReponseJuste: null | number;

    public pointReponsefausse: null | number;

    public typeDeQuestion: TypeDeQuestionDto ;
    public homeWork: HomeWorkDto ;
     public howeWorkQSTReponses: Array<HoweWorkQSTReponseDto>;
    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';
        this.numero = null;
        this.pointReponseJuste = null;
        this.pointReponsefausse = null;
        this.typeDeQuestion = new TypeDeQuestionDto() ;
        this.homeWork = new HomeWorkDto() ;
        this.howeWorkQSTReponses = new Array<HoweWorkQSTReponseDto>();

        }

}
