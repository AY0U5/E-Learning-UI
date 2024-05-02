import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';
import {CentreDto} from '../courseref/Centre.model';
import {CoursDto} from './Cours.model';
import {EtatParcoursDto} from "../courseref/EtatParcours.model";

export class ParcoursDto extends BaseDto{

   public datePublication: Date;

   public dateCreation: Date;

    public description: string;

    public code: string;

    public libelle: string;

    public numeroOrder: null | number;

    public nombreCours: null | number;

    public etatParcours: EtatParcoursDto ;

    public centre: CentreDto ;
     public courss: Array<CoursDto>;
     public etudiants: Array<EtudiantDto>;


    constructor() {
        super();

        this.datePublication = null;
        this.dateCreation = null;
        this.description = '';
        this.code = '';
        this.libelle = '';
        this.numeroOrder = null;
        this.nombreCours = null;
        this.etatParcours = new EtatParcoursDto() ;
        this.centre = new CentreDto() ;
        this.courss = new Array<CoursDto>();
        this.etudiants = new Array<EtudiantDto>();

        }

}
