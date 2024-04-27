import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';

export class ConfirmationTokenDto extends BaseDto{

    public token: string;

   public expiresAt: Date;

   public createdAt: Date;

   public confirmedAt: Date;

    public etudiant: EtudiantDto ;
    

    constructor() {
        super();

        this.token = '';
        this.expiresAt = null;
        this.createdAt = null;
        this.confirmedAt = null;
        this.etudiant = new EtudiantDto() ;

        }

}
