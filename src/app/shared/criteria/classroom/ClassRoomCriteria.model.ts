import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EtudiantClassRoomCriteria} from '../inscriptionref/EtudiantClassRoomCriteria.model';
import {QuizClassRoomCriteria} from '../quiz/QuizClassRoomCriteria.model';
import {ProfCriteria} from '../prof/ProfCriteria.model';

export class ClassRoomCriteria  extends BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public description: string;
    public descriptionLike: string;
      public etudiantClassRooms: Array<EtudiantClassRoomCriteria>;
      public quizClassRooms: Array<QuizClassRoomCriteria>;

}
