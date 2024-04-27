import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {VocabularyQuizCriteria} from './VocabularyQuizCriteria.model';
import {SectionCriteria} from '../course/SectionCriteria.model';

export class VocabularyCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
     public numero: number;
     public numeroMin: number;
     public numeroMax: number;
    public word: string;
    public wordLike: string;
    public libelle: string;
    public libelleLike: string;
    public result: string;
    public resultLike: string;
    public explication: string;
    public explicationLike: string;
    public exemple: string;
    public exempleLike: string;
    public image: string;
    public imageLike: string;
  public vocabularyQuiz: VocabularyQuizCriteria ;
  public vocabularyQuizs: Array<VocabularyQuizCriteria> ;

}
