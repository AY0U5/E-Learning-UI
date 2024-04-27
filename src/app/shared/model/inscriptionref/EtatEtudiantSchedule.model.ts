import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EtatEtudiantScheduleDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public couleur: string;

    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';
        this.couleur = '';

        }

}
