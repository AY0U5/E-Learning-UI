import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {VocabularyCriteria} from './VocabularyCriteria.model';
import {SectionCriteria} from '../course/SectionCriteria.model';

export class VocabularyQuizCriteria  extends BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
      public vocabularys: Array<VocabularyCriteria>;

}
