import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';
import {GroupeEtudiantDto} from './GroupeEtudiant.model';

export class GroupeEtudiantDetailDto extends BaseDto{

    public groupeEtudiant: GroupeEtudiantDto ;
    public etudiant: EtudiantDto ;
    

    constructor() {
        super();

        this.groupeEtudiant = new GroupeEtudiantDto() ;
        this.etudiant = new EtudiantDto() ;

        }

}
