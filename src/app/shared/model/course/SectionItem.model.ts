import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SectionDto} from './Section.model';

export class SectionItemDto extends BaseDto{

    public imageUrl: string;

    public response: string;

    public transcription: string;

    public translation: string;

    public explanation: string;

    public example: string;

    public synonyms: string;

    public section: SectionDto ;
    

    constructor() {
        super();

        this.imageUrl = '';
        this.response = '';
        this.transcription = '';
        this.translation = '';
        this.explanation = '';
        this.example = '';
        this.synonyms = '';

        }

}
