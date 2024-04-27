import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';
import {ProfDto} from './Prof.model';

export class CalendrierProfDto extends BaseDto{

    public ref: string;

    public startTime: string;

    public endTime: string;

   public startRecur: Date;

   public endRecur: Date;

    public prof: ProfDto ;
    public etudiant: EtudiantDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.startTime = '';
        this.endTime = '';
        this.startRecur = null;
        this.endRecur = null;
        this.prof = new ProfDto() ;

        }

}
