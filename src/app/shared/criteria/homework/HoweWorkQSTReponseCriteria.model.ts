import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {HomeWorkQuestionCriteria} from './HomeWorkQuestionCriteria.model';

export class HoweWorkQSTReponseCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public lib: string;
    public libLike: string;
    public etatReponse: string;
    public etatReponseLike: string;
     public numero: number;
     public numeroMin: number;
     public numeroMax: number;

}
