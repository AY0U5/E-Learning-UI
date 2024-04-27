import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {QuestionCriteria} from './QuestionCriteria.model';

export class ReponseCriteria  extends BaseCriteria  {

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
  public question: QuestionCriteria ;
  public questions: Array<QuestionCriteria> ;

}
