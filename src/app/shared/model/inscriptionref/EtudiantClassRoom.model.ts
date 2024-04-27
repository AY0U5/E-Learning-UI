import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';
import {ClassRoomDto} from '../classroom/ClassRoom.model';

export class EtudiantClassRoomDto extends BaseDto{

    public classRoom: ClassRoomDto ;
    public etudiant: EtudiantDto ;
    

    constructor() {
        super();

        this.classRoom = new ClassRoomDto() ;
        this.etudiant = new EtudiantDto() ;

        }

}
