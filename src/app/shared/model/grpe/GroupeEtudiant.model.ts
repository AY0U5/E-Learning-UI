import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursDto} from '../course/Parcours.model';
import {GroupeEtatDto} from './GroupeEtat.model';
import {GroupeEtudiantDetailDto} from './GroupeEtudiantDetail.model';
import {GroupeTypeDto} from './GroupeType.model';
import {GroupeEtudeDto} from './GroupeEtude.model';
import {ProfDto} from '../prof/Prof.model';

export class GroupeEtudiantDto extends BaseDto{

    public libelle: string;

   public dateDebut: Date;

   public dateFin: Date;

    public nombrePlace: null | number;

    public nombrePlacevide: null | number;

    public nombrePlaceNonVide: null | number;

    public groupeEtude: GroupeEtudeDto ;
    public groupeType: GroupeTypeDto ;
    public groupeEtat: GroupeEtatDto ;
    public parcours: ParcoursDto ;
    public prof: ProfDto ;
     public groupeEtudiantDetails: Array<GroupeEtudiantDetailDto>;
    

    constructor() {
        super();

        this.libelle = '';
        this.dateDebut = null;
        this.dateFin = null;
        this.nombrePlace = null;
        this.nombrePlacevide = null;
        this.nombrePlaceNonVide = null;
        this.groupeType = new GroupeTypeDto() ;
        this.groupeEtudiantDetails = new Array<GroupeEtudiantDetailDto>();

        }

}
