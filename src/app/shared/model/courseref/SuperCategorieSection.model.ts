import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CategorieSectionDto} from './CategorieSection.model';

export class SuperCategorieSectionDto extends BaseDto{

    public code: string;

    public libelle: string;

     public categorieSections: Array<CategorieSectionDto>;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.categorieSections = new Array<CategorieSectionDto>();

        }

}
