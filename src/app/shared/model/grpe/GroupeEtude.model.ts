import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class GroupeEtudeDto extends BaseDto{

    public libelle: string;

    public description: string;

    public nombreEtudiant: null | number;

    

    constructor() {
        super();

        this.libelle = '';
        this.description = '';
        this.nombreEtudiant = null;

        }

}
