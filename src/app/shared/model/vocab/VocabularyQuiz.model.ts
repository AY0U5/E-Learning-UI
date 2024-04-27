import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {VocabularyDto} from './Vocabulary.model';
import {SectionDto} from '../course/Section.model';

export class VocabularyQuizDto extends BaseDto{

    public libelle: string;

   public dateDebut: Date;

   public dateFin: Date;

    public section: SectionDto ;
     public vocabularys: Array<VocabularyDto>;
    

    constructor() {
        super();

        this.libelle = '';
        this.dateDebut = null;
        this.dateFin = null;
        this.vocabularys = new Array<VocabularyDto>();

        }

}
