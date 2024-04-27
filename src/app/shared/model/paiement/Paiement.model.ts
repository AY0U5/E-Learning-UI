import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {GroupeEtudiantDto} from '../grpe/GroupeEtudiant.model';
import {ProfDto} from '../prof/Prof.model';

export class PaiementDto extends BaseDto{

   public datePaiement: Date;

    public prof: ProfDto ;
    public groupeEtudiant: GroupeEtudiantDto ;
    

    constructor() {
        super();

        this.datePaiement = null;
        this.prof = new ProfDto() ;
        this.groupeEtudiant = new GroupeEtudiantDto() ;

        }

}
