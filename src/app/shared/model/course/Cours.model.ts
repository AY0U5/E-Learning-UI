import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursDto} from './Parcours.model';
import {EtatCoursDto} from '../courseref/EtatCours.model';
import {SectionDto} from './Section.model';
import {HomeWorkDto} from '../homework/HomeWork.model';

export class CoursDto extends BaseDto{

    public code: string;

    public libelle: string;

    public description: string;

    public image: string;

    public nombreSectionFinalise: null | number;

    public nombreSectionEnCours: null | number;

    public nombreLinkEnCours: null | number;

    public nombreLinkFinalise: null | number;

    public numeroOrder: null | number;

    public etatCours: EtatCoursDto ;
    public parcours: ParcoursDto ;
     public sections: Array<SectionDto>;
     public homeWorks: Array<HomeWorkDto>;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.description = '';
        this.image = '';
        this.nombreSectionFinalise = null;
        this.nombreSectionEnCours = null;
        this.nombreLinkEnCours = null;
        this.nombreLinkFinalise = null;
        this.numeroOrder = null;
        this.etatCours = new EtatCoursDto() ;
        this.sections = new Array<SectionDto>();
        this.homeWorks = new Array<HomeWorkDto>();

        }

}
