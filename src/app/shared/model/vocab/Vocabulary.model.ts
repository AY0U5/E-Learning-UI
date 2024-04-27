import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {VocabularyQuizDto} from './VocabularyQuiz.model';
import {SectionDto} from '../course/Section.model';

export class VocabularyDto extends BaseDto{

    public ref: string;

    public numero: null | number;

    public word: string;

    public libelle: string;

    public result: string;

    public explication: string;

    public exemple: string;

    public image: string;

    public section: SectionDto ;
    public vocabularyQuiz: VocabularyQuizDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.numero = null;
        this.word = '';
        this.libelle = '';
        this.result = '';
        this.explication = '';
        this.exemple = '';
        this.image = '';
        this.vocabularyQuiz = new VocabularyQuizDto() ;

        }

}
