import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {QuizCriteria} from './QuizCriteria.model';
import {ClassRoomCriteria} from '../classroom/ClassRoomCriteria.model';

export class QuizClassRoomCriteria  extends BaseCriteria  {

    public id: number;
  public classRoom: ClassRoomCriteria ;
  public classRooms: Array<ClassRoomCriteria> ;
  public quiz: QuizCriteria ;
  public quizs: Array<QuizCriteria> ;

}
