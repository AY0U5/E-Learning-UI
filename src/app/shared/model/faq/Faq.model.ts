import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FaqTypeDto} from './FaqType.model';

export class FaqDto extends BaseDto{

    public description: string;

    public libelle: string;

    public faqType: FaqTypeDto ;
    

    constructor() {
        super();

        this.description = '';
        this.libelle = '';
        this.faqType = new FaqTypeDto() ;

        }

}
