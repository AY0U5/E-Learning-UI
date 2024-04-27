import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursDto} from '../course/Parcours.model';
import {PriceDto} from '../price/Price.model';

export class PackStudentDto extends BaseDto{

    public nombreCours: null | number;

   public forGroupe: null | boolean;

    public code: string;

    public libelle: string;

    public description: string;

    public preRequisites: string;

    public whyTakeThisCourse: string;

    public expectations: string;

    public imgUrl: string;

    public totalStudents: null | number;

    public rating: string;

    public oldPrice: string;

    public parcours: ParcoursDto ;
    public price: PriceDto ;
    

    constructor() {
        super();

        this.nombreCours = null;
        this.forGroupe = null;
        this.code = '';
        this.libelle = '';
        this.description = '';
        this.preRequisites = '';
        this.whyTakeThisCourse = '';
        this.expectations = '';
        this.imgUrl = '';
        this.totalStudents = null;
        this.rating = '';
        this.oldPrice = '';

        }

}
