import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EtudiantCriteria} from '../inscription/EtudiantCriteria.model';
import {CoursCriteria} from '../course/CoursCriteria.model';
import {ProfCriteria} from '../prof/ProfCriteria.model';

export class ProfReviewCriteria  extends BaseCriteria  {

    public id: number;
     public review: number;
     public reviewMin: number;
     public reviewMax: number;
    public comment: string;
    public commentLike: string;
    public dateReview: Date;
    public dateReviewFrom: Date;
    public dateReviewTo: Date;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public cours: CoursCriteria ;
  public courss: Array<CoursCriteria> ;

}
