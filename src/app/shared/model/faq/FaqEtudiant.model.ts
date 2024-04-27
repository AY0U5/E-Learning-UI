import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FaqTypeDto} from './FaqType.model';
import {EtudiantDto} from '../inscription/Etudiant.model';
import {AdminDto} from '../alc/Admin.model';

export class FaqEtudiantDto extends BaseDto{

    public description: string;

    public libelle: string;

    public etudiant: EtudiantDto ;
    public admin: AdminDto ;
    public faqType: FaqTypeDto ;
    

    constructor() {
        super();

        this.description = '';
        this.libelle = '';
        this.admin = new AdminDto() ;

        }

}
