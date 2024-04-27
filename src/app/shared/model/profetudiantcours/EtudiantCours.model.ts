import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';
import {CoursDto} from '../course/Cours.model';
import {ProfDto} from '../prof/Prof.model';

export class EtudiantCoursDto extends BaseDto{

   public payer: null | boolean;

   public dateFin: Date;

    public etudiant: EtudiantDto ;
    public prof: ProfDto ;
    public cours: CoursDto ;
    

    constructor() {
        super();

        this.payer = null;
        this.dateFin = null;
        this.etudiant = new EtudiantDto() ;
        this.prof = new ProfDto() ;
        this.cours = new CoursDto() ;

        }

}
