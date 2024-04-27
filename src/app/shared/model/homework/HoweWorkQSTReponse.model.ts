import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {HomeWorkQuestionDto} from './HomeWorkQuestion.model';

export class HoweWorkQSTReponseDto extends BaseDto{

    public ref: string;

    public lib: string;

    public etatReponse: string;

    public numero: null | number;

    public homeWorkQuestion: HomeWorkQuestionDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.lib = '';
        this.etatReponse = '';
        this.numero = null;

        }

}
