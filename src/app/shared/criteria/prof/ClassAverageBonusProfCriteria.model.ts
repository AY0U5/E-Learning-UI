import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SalaryCriteria} from '../salary/SalaryCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';

export class ClassAverageBonusProfCriteria  extends BaseCriteria  {

    public id: number;
     public mois: number;
     public moisMin: number;
     public moisMax: number;
     public annee: number;
     public anneeMin: number;
     public anneeMax: number;

}
