import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CategorieSectionDto} from '../courseref/CategorieSection.model';
import {CoursDto} from './Cours.model';
import {SectionItemDto} from './SectionItem.model';

export class SectionDto extends BaseDto{

    public code: string;

    public libelle: string;

    public urlImage: string;

    public urlImage2: string;

    public urlImage3: string;

    public urlVideo: string;

    public contenu: string;

    public questions: string;

    public indicationProf: string;

    public numeroOrder: null | number;

    public url: null | number;

    public content: null | number;

    public categorieSection: CategorieSectionDto ;
    public cours: CoursDto ;
     public sectionItems: Array<SectionItemDto>;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.urlImage = '';
        this.urlImage2 = '';
        this.urlImage3 = '';
        this.urlVideo = '';
        this.contenu = '';
        this.questions = '';
        this.indicationProf = '';
        this.numeroOrder = null;
        this.url = null;
        this.content = null;
        this.categorieSection = new CategorieSectionDto() ;
        this.cours = new CoursDto() ;
        this.sectionItems = new Array<SectionItemDto>();

        }

}
