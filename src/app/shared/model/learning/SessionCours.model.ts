import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SalaryDto} from '../salary/Salary.model';
import {GroupeEtudiantDto} from '../grpe/GroupeEtudiant.model';
import {SessionCoursSectionDto} from './SessionCoursSection.model';
import {CoursDto} from '../course/Cours.model';
import {ProfDto} from '../prof/Prof.model';

export class SessionCoursDto extends BaseDto{

    public reference: string;

    public duree: null | number;

    public totalheure: null | number;

    public mois: null | number;

    public annee: null | number;

   public dateFin: Date;

   public dateDebut: Date;

   public payer: null | boolean;

    public prof: ProfDto ;
    public cours: CoursDto ;
    public groupeEtudiant: GroupeEtudiantDto ;
    public salary: SalaryDto ;
     public sessionCoursSections: Array<SessionCoursSectionDto>;
    

    constructor() {
        super();

        this.reference = '';
        this.duree = null;
        this.totalheure = null;
        this.mois = null;
        this.annee = null;
        this.dateFin = null;
        this.dateDebut = null;
        this.payer = null;
        this.sessionCoursSections = new Array<SessionCoursSectionDto>();

        }

}
