import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {HomeWorkEtudiantCriteria} from './HomeWorkEtudiantCriteria.model';
import {HomeWorkQuestionCriteria} from './HomeWorkQuestionCriteria.model';
import {TypeHomeWorkCriteria} from './TypeHomeWorkCriteria.model';
import {CoursCriteria} from '../course/CoursCriteria.model';

export class HomeWorkCriteria  extends BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public urlImage: string;
    public urlImageLike: string;
    public urlVideo: string;
    public urlVideoLike: string;
      public homeWorkQuestions: Array<HomeWorkQuestionCriteria>;
      public homeWorkEtudiants: Array<HomeWorkEtudiantCriteria>;

}
