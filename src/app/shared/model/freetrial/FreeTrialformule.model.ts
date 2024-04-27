import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {InscriptionDto} from '../grpe/Inscription.model';

export class FreeTrialformuleDto extends BaseDto{

    public code: string;

    public dayspeerweek: string;

    public timeperday: string;

    public teacherGenderoption: string;

    public teacherAgeRange: string;

    public teacherPersonnality: string;

   public status: null | boolean;

   public dateConfirmation: Date;

    public inscription: InscriptionDto ;
    

    constructor() {
        super();

        this.code = '';
        this.dayspeerweek = '';
        this.timeperday = '';
        this.teacherGenderoption = '';
        this.teacherAgeRange = '';
        this.teacherPersonnality = '';
        this.status = null;
        this.dateConfirmation = null;

        }

}
