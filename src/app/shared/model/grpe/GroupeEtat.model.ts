import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class GroupeEtatDto extends BaseDto{

    public code: string;

    public libelle: string;

    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';

        }

}
