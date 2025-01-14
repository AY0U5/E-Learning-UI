import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EtudiantCriteria} from '../inscription/EtudiantCriteria.model';
import {CentreCriteria} from '../courseref/CentreCriteria.model';
import {CoursCriteria} from './CoursCriteria.model';
import {EtatParcoursCriteria} from "../courseref/EtatParcoursCriteria.model";

export class ParcoursCriteria  extends BaseCriteria  {

    public id: number;
    public datePublication: Date;
    public datePublicationFrom: Date;
    public datePublicationTo: Date;
    public dateCreation: Date;
    public dateCreationFrom: Date;
    public dateCreationTo: Date;
    public description: string;
    public descriptionLike: string;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
     public numeroOrder: number;
     public numeroOrderMin: number;
     public numeroOrderMax: number;
     public nombreCours: number;
     public nombreCoursMin: number;
     public nombreCoursMax: number;
    public etatParcours: EtatParcoursCriteria ;
    public etatParcourss: Array<EtatParcoursCriteria> ;
  public centre: CentreCriteria ;
  public centres: Array<CentreCriteria> ;
      public courss: Array<CoursCriteria>;
      public etudiants: Array<EtudiantCriteria>;

}
