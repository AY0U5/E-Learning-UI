import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EtudiantCriteria} from '../inscription/EtudiantCriteria.model';
import {CoursCriteria} from '../course/CoursCriteria.model';
import {ProfCriteria} from '../prof/ProfCriteria.model';

export class EtudiantCoursCriteria  extends BaseCriteria  {

    public id: number;
    public payer: null | boolean;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public cours: CoursCriteria ;
  public courss: Array<CoursCriteria> ;

}
