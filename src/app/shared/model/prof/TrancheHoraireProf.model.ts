import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProfDto} from './Prof.model';

export class TrancheHoraireProfDto extends BaseDto{

    public startHour: string;

    public endHour: string;

    public day: null | number;

    public groupIndex: null | number;

    public profsId: null | number;

    public prof: ProfDto ;
    

    constructor() {
        super();

        this.startHour = '';
        this.endHour = '';
        this.day = null;
        this.groupIndex = null;
        this.profsId = null;

        }

}
