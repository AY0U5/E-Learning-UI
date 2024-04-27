import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FaqTypeDto extends BaseDto{

    public destinataire: string;

    public libelle: string;

    

    constructor() {
        super();

        this.destinataire = '';
        this.libelle = '';

        }

}
