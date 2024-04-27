import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursDto} from '../course/Parcours.model';

export class LevelTestConfigurationDto extends BaseDto{

    public noteMin: null | number;

    public noteMax: null | number;

    public parcours: ParcoursDto ;
    

    constructor() {
        super();

        this.noteMin = null;
        this.noteMax = null;
        this.parcours = new ParcoursDto() ;

        }

}
