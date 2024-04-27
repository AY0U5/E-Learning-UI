import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {ParcoursCriteria} from '../course/ParcoursCriteria.model';
import {GroupeEtatCriteria} from './GroupeEtatCriteria.model';
import {GroupeEtudiantDetailCriteria} from './GroupeEtudiantDetailCriteria.model';
import {GroupeTypeCriteria} from './GroupeTypeCriteria.model';
import {GroupeEtudeCriteria} from './GroupeEtudeCriteria.model';
import {ProfCriteria} from '../prof/ProfCriteria.model';

export class GroupeEtudiantCriteria  extends BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
     public nombrePlace: number;
     public nombrePlaceMin: number;
     public nombrePlaceMax: number;
     public nombrePlacevide: number;
     public nombrePlacevideMin: number;
     public nombrePlacevideMax: number;
     public nombrePlaceNonVide: number;
     public nombrePlaceNonVideMin: number;
     public nombrePlaceNonVideMax: number;
  public groupeType: GroupeTypeCriteria ;
  public groupeTypes: Array<GroupeTypeCriteria> ;
      public groupeEtudiantDetails: Array<GroupeEtudiantDetailCriteria>;

}
