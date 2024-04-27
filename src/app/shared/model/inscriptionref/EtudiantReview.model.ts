import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';
import {CoursDto} from '../course/Cours.model';
import {ProfDto} from '../prof/Prof.model';

export class EtudiantReviewDto extends BaseDto{

    public review: null | number;

    public comment: string;

   public dateReview: Date;

    public etudiant: EtudiantDto ;
    public prof: ProfDto ;
    public cours: CoursDto ;
    

    constructor() {
        super();

        this.review = null;
        this.comment = '';
        this.dateReview = null;
        this.etudiant = new EtudiantDto() ;
        this.prof = new ProfDto() ;
        this.cours = new CoursDto() ;

        }

}
