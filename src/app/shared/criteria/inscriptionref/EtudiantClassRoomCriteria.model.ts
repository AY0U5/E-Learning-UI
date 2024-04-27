import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EtudiantCriteria} from '../inscription/EtudiantCriteria.model';
import {ClassRoomCriteria} from '../classroom/ClassRoomCriteria.model';

export class EtudiantClassRoomCriteria  extends BaseCriteria  {

    public id: number;
  public classRoom: ClassRoomCriteria ;
  public classRooms: Array<ClassRoomCriteria> ;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;

}
