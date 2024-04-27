import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../inscription/Etudiant.model';
import {FreeTrialDto} from './FreeTrial.model';

export class FreeTrialDetailDto extends BaseDto{

   public presence: null | boolean;

   public whatsUpMessageSent: null | boolean;

   public dateEnvoiwhatsUpMessage: Date;

   public emailMessageSent: null | boolean;

   public dateEnvoiEmailMessage: Date;

   public abonne: null | boolean;

    public freeTrial: FreeTrialDto ;
    public etudiant: EtudiantDto ;
    

    constructor() {
        super();

        this.presence = null;
        this.whatsUpMessageSent = null;
        this.dateEnvoiwhatsUpMessage = null;
        this.emailMessageSent = null;
        this.dateEnvoiEmailMessage = null;
        this.abonne = null;

        }

}
