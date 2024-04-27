import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {ParcoursCriteria} from '../course/ParcoursCriteria.model';
import {TypeTeacherCriteria} from './TypeTeacherCriteria.model';
import {RecommendTeacherCriteria} from '../recomrecla/RecommendTeacherCriteria.model';
import {CategorieProfCriteria} from './CategorieProfCriteria.model';
import {TrancheHoraireProfCriteria} from './TrancheHoraireProfCriteria.model';
import {ClassRoomCriteria} from '../classroom/ClassRoomCriteria.model';

export class ProfCriteria  extends BaseCriteria  {

    public ref: string;
    public refLike: string;
    public about: string;
    public aboutLike: string;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public username: string;
    public usernameLike: string;
    public password: string;
    public passwordLike: string;
      public trancheHoraireProfs: Array<TrancheHoraireProfCriteria>;
      public classRooms: Array<ClassRoomCriteria>;
      public recommendTeachers: Array<RecommendTeacherCriteria>;

}
