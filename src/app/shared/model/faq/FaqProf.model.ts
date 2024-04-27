import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FaqTypeDto} from './FaqType.model';
import {AdminDto} from '../alc/Admin.model';
import {ProfDto} from '../prof/Prof.model';

export class FaqProfDto extends BaseDto{

    public description: string;

    public libelle: string;

    public prof: ProfDto ;
    public admin: AdminDto ;
    public faqType: FaqTypeDto ;
    

    constructor() {
        super();

        this.description = '';
        this.libelle = '';
        this.prof = new ProfDto() ;
        this.admin = new AdminDto() ;

        }

}
