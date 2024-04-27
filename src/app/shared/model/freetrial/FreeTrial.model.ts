import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FreeTrialTeacherEmailTemplateDto} from './FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherWhatsTemplateDto} from './FreeTrialTeacherWhatsTemplate.model';
import {StatutFreeTrialDto} from './StatutFreeTrial.model';
import {FreeTrialConfigurationDto} from './FreeTrialConfiguration.model';
import {FreeTrialStudentEmailTemplateDto} from './FreeTrialStudentEmailTemplate.model';
import {FreeTrialDetailDto} from './FreeTrialDetail.model';
import {ProfDto} from '../prof/Prof.model';
import {NiveauEtudeDto} from '../inscriptionref/NiveauEtude.model';
import {FreeTrialStudentWhatsTemplateDto} from './FreeTrialStudentWhatsTemplate.model';

export class FreeTrialDto extends BaseDto{

    public reference: string;

   public dateFreeTrial: Date;

    public link: string;

   public emailTeacherSent: null | boolean;

   public emailTeacherSendingDate: Date;

   public whatsTeacherSent: null | boolean;

   public whatsTeacherSendingDate: Date;

   public dateFreeTrialPremierRappel: Date;

   public dateFreeTrialPremierDeuxiemeRappel: Date;

    public nombreStudentTotal: null | number;

    public nombreStudentAbonne: null | number;

    public nombreStudentPresent: null | number;

    public prof: ProfDto ;
    public niveauEtude: NiveauEtudeDto ;
    public freeTrialStudentWhatsTemplate: FreeTrialStudentWhatsTemplateDto ;
    public freeTrialStudentEmailTemplate: FreeTrialStudentEmailTemplateDto ;
    public freeTrialTeacherEmailTemplate: FreeTrialTeacherEmailTemplateDto ;
    public freeTrialTeacherWhatsTemplate: FreeTrialTeacherWhatsTemplateDto ;
    public freeTrialConfiguration: FreeTrialConfigurationDto ;
    public statutFreeTrial: StatutFreeTrialDto ;
     public freeTrialDetails: Array<FreeTrialDetailDto>;
    

    constructor() {
        super();

        this.reference = '';
        this.dateFreeTrial = null;
        this.link = '';
        this.emailTeacherSent = null;
        this.emailTeacherSendingDate = null;
        this.whatsTeacherSent = null;
        this.whatsTeacherSendingDate = null;
        this.dateFreeTrialPremierRappel = null;
        this.dateFreeTrialPremierDeuxiemeRappel = null;
        this.nombreStudentTotal = null;
        this.nombreStudentAbonne = null;
        this.nombreStudentPresent = null;
        this.prof = new ProfDto() ;
        this.niveauEtude = new NiveauEtudeDto() ;
        this.freeTrialStudentWhatsTemplate = new FreeTrialStudentWhatsTemplateDto() ;
        this.freeTrialTeacherEmailTemplate = new FreeTrialTeacherEmailTemplateDto() ;
        this.freeTrialConfiguration = new FreeTrialConfigurationDto() ;
        this.freeTrialDetails = new Array<FreeTrialDetailDto>();

        }

}
