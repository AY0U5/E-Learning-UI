import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';

export class InviteStudentDto extends BaseDto{

    public code: string;

   public isAccepted: null | boolean;

   public isPaidPack: null | boolean;

    public emailInvited: string;

   public dateSentInvitation: Date;

   public dateAcceptInvitation: Date;

   public datePayPack: Date;

    public etudiant: EtudiantDto ;
    

    constructor() {
        super();

        this.code = '';
        this.isAccepted = null;
        this.isPaidPack = null;
        this.emailInvited = '';
        this.dateSentInvitation = null;
        this.dateAcceptInvitation = null;
        this.datePayPack = null;
        this.etudiant = new EtudiantDto() ;

        }

}
