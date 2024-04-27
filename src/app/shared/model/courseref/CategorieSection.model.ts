import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SectionDto} from '../course/Section.model';
import {SuperCategorieSectionDto} from './SuperCategorieSection.model';

export class CategorieSectionDto extends BaseDto{

    public code: string;

    public libelle: string;

    public numeroOrder: null | number;

    public superCategorieSection: SuperCategorieSectionDto ;
     public sections: Array<SectionDto>;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.numeroOrder = null;
        this.superCategorieSection = new SuperCategorieSectionDto() ;
        this.sections = new Array<SectionDto>();

        }

}
