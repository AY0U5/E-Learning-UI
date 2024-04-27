import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantClassRoomDto} from '../inscriptionref/EtudiantClassRoom.model';
import {QuizClassRoomDto} from '../quiz/QuizClassRoom.model';
import {ProfDto} from '../prof/Prof.model';

export class ClassRoomDto extends BaseDto{

    public libelle: string;

    public description: string;

    public prof: ProfDto ;
     public etudiantClassRooms: Array<EtudiantClassRoomDto>;
     public quizClassRooms: Array<QuizClassRoomDto>;
    

    constructor() {
        super();

        this.libelle = '';
        this.description = '';
        this.etudiantClassRooms = new Array<EtudiantClassRoomDto>();
        this.quizClassRooms = new Array<QuizClassRoomDto>();

        }

}
