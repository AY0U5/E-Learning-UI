import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';
import {ReponseEtudiantHomeWorkDto} from './ReponseEtudiantHomeWork.model';
import {HomeWorkDto} from './HomeWork.model';

export class HomeWorkEtudiantDto extends BaseDto{

    public note: null | number;

    public resultat: string;

   public dateHomeWork: Date;

    public etudiant: EtudiantDto ;
    public homeWork: HomeWorkDto ;
     public reponseEtudiantHomeWorks: Array<ReponseEtudiantHomeWorkDto>;
    

    constructor() {
        super();

        this.note = null;
        this.resultat = '';
        this.dateHomeWork = null;
        this.etudiant = new EtudiantDto() ;
        this.homeWork = new HomeWorkDto() ;
        this.reponseEtudiantHomeWorks = new Array<ReponseEtudiantHomeWorkDto>();

        }

}
