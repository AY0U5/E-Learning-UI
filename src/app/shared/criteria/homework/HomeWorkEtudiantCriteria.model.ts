import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EtudiantCriteria} from '../inscription/EtudiantCriteria.model';
import {ReponseEtudiantHomeWorkCriteria} from './ReponseEtudiantHomeWorkCriteria.model';
import {HomeWorkCriteria} from './HomeWorkCriteria.model';

export class HomeWorkEtudiantCriteria  extends BaseCriteria  {

    public id: number;
     public note: number;
     public noteMin: number;
     public noteMax: number;
    public resultat: string;
    public resultatLike: string;
    public dateHomeWork: Date;
    public dateHomeWorkFrom: Date;
    public dateHomeWorkTo: Date;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;
  public homeWork: HomeWorkCriteria ;
  public homeWorks: Array<HomeWorkCriteria> ;
      public reponseEtudiantHomeWorks: Array<ReponseEtudiantHomeWorkCriteria>;

}
