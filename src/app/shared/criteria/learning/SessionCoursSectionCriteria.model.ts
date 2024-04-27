import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SessionCoursCriteria} from './SessionCoursCriteria.model';
import {SectionCriteria} from '../course/SectionCriteria.model';

export class SessionCoursSectionCriteria  extends BaseCriteria  {

    public id: number;
  public sessionCours: SessionCoursCriteria ;
  public sessionCourss: Array<SessionCoursCriteria> ;

}
