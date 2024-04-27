import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProfDto} from './Prof.model';

export class CategorieProfDto extends BaseDto{

    public code: string;

    public level: string;

    public lessonRate: null | number;

     public profs: Array<ProfDto>;
    

    constructor() {
        super();

        this.code = '';
        this.level = '';
        this.lessonRate = null;
        this.profs = new Array<ProfDto>();

        }

}
