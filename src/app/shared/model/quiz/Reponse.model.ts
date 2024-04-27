import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuestionDto} from './Question.model';

export class ReponseDto extends BaseDto{

    public ref: string;

    public lib: string;

    public etatReponse: string;

    public numero: null | number;

    public question: QuestionDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.lib = '';
        this.etatReponse = '';
        this.numero = null;
        this.question = new QuestionDto() ;

        }

}
