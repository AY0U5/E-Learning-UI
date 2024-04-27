import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {FaqTypeCriteria} from './FaqTypeCriteria.model';
import {EtudiantCriteria} from '../inscription/EtudiantCriteria.model';
import {AdminCriteria} from '../alc/AdminCriteria.model';

export class FaqEtudiantCriteria  extends BaseCriteria  {

    public id: number;
    public description: string;
    public descriptionLike: string;
    public libelle: string;
    public libelleLike: string;
  public admin: AdminCriteria ;
  public admins: Array<AdminCriteria> ;

}
