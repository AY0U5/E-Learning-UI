import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {HoweWorkQSTReponseDto} from './HoweWorkQSTReponse.model';
import {HomeWorkEtudiantDto} from './HomeWorkEtudiant.model';
import {HomeWorkQuestionDto} from './HomeWorkQuestion.model';

export class ReponseEtudiantHomeWorkDto extends BaseDto{

    public answer: string;

    public profNote: string;

    public note: null | number;

    public howeWorkQSTReponse: HoweWorkQSTReponseDto ;
    public homeWorkEtudiant: HomeWorkEtudiantDto ;
    public homeWorkQuestion: HomeWorkQuestionDto ;
    

    constructor() {
        super();

        this.answer = '';
        this.profNote = '';
        this.note = null;
        this.howeWorkQSTReponse = new HoweWorkQSTReponseDto() ;
        this.homeWorkEtudiant = new HomeWorkEtudiantDto() ;
        this.homeWorkQuestion = new HomeWorkQuestionDto() ;

        }

}
