import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {HomeWorkEtudiantDto} from './HomeWorkEtudiant.model';
import {HomeWorkQuestionDto} from './HomeWorkQuestion.model';
import {TypeHomeWorkDto} from './TypeHomeWork.model';
import {CoursDto} from '../course/Cours.model';

export class HomeWorkDto extends BaseDto{

    public libelle: string;

    public urlImage: string;

    public urlVideo: string;

    public cours: CoursDto ;
    public typeHomeWork: TypeHomeWorkDto ;
     public homeWorkQuestions: Array<HomeWorkQuestionDto>;
     public homeWorkEtudiants: Array<HomeWorkEtudiantDto>;
    

    constructor() {
        super();

        this.libelle = '';
        this.urlImage = '';
        this.urlVideo = '';
        this.homeWorkQuestions = new Array<HomeWorkQuestionDto>();
        this.homeWorkEtudiants = new Array<HomeWorkEtudiantDto>();

        }

}
