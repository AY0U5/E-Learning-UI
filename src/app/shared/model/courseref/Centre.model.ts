import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursDto} from '../course/Parcours.model';

export class CentreDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public description: string;

    public log: string;

    public password: string;

     public parcourss: Array<ParcoursDto>;
    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';
        this.description = '';
        this.log = '';
        this.password = '';
        this.parcourss = new Array<ParcoursDto>();

        }

}
