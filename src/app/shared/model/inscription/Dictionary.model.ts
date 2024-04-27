import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from './Etudiant.model';

export class DictionaryDto extends BaseDto{

    public word: string;

    public definition: string;

    public etudiant: EtudiantDto ;
    

    constructor() {
        super();

        this.word = '';
        this.definition = '';

        }

}
