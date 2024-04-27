import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuizDto} from './Quiz.model';
import {ClassRoomDto} from '../classroom/ClassRoom.model';

export class QuizClassRoomDto extends BaseDto{

    public classRoom: ClassRoomDto ;
    public quiz: QuizDto ;
    

    constructor() {
        super();

        this.classRoom = new ClassRoomDto() ;
        this.quiz = new QuizDto() ;

        }

}
