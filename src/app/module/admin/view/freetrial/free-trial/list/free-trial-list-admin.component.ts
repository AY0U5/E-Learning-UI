import {Component, OnInit} from '@angular/core';
import {FreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialAdmin.service';
import {FreeTrialDto} from 'src/app/shared/model/freetrial/FreeTrial.model';
import {FreeTrialCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {FreeTrialTeacherEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherEmailTemplateAdmin.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherWhatsTemplateAdmin.service';
import {StatutFreeTrialDto} from 'src/app/shared/model/freetrial/StatutFreeTrial.model';
import {StatutFreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/StatutFreeTrialAdmin.service';
import {FreeTrialConfigurationDto} from 'src/app/shared/model/freetrial/FreeTrialConfiguration.model';
import {FreeTrialConfigurationAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialConfigurationAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentEmailTemplateAdmin.service';
import {FreeTrialDetailDto} from 'src/app/shared/model/freetrial/FreeTrialDetail.model';
import {FreeTrialDetailAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialDetailAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
import {NiveauEtudeDto} from 'src/app/shared/model/inscriptionref/NiveauEtude.model';
import {NiveauEtudeAdminService} from 'src/app/shared/service/admin/inscriptionref/NiveauEtudeAdmin.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentWhatsTemplateAdmin.service';


@Component({
  selector: 'app-free-trial-list-admin',
  templateUrl: './free-trial-list-admin.component.html'
})
export class FreeTrialListAdminComponent extends AbstractListController<FreeTrialDto, FreeTrialCriteria, FreeTrialAdminService>  implements OnInit {

    override fileName = 'FreeTrial';


     yesOrNoEmailTeacherSent: any[] = [];
     yesOrNoWhatsTeacherSent: any[] = [];
    profs: Array<ProfDto>;
    niveauEtudes: Array<NiveauEtudeDto>;
    freeTrialStudentWhatsTemplates: Array<FreeTrialStudentWhatsTemplateDto>;
    freeTrialStudentEmailTemplates: Array<FreeTrialStudentEmailTemplateDto>;
    freeTrialTeacherEmailTemplates: Array<FreeTrialTeacherEmailTemplateDto>;
    freeTrialTeacherWhatsTemplates: Array<FreeTrialTeacherWhatsTemplateDto>;
    freeTrialConfigurations: Array<FreeTrialConfigurationDto>;
    statutFreeTrials: Array<StatutFreeTrialDto>;


    constructor( private freeTrialService: FreeTrialAdminService  , private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateAdminService, private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateAdminService, private statutFreeTrialService: StatutFreeTrialAdminService, private freeTrialConfigurationService: FreeTrialConfigurationAdminService, private etudiantService: EtudiantAdminService, private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateAdminService, private freeTrialDetailService: FreeTrialDetailAdminService, private profService: ProfAdminService, private niveauEtudeService: NiveauEtudeAdminService, private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateAdminService) {
        super(freeTrialService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FreeTrial').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
                this.loadNiveauEtude();
                this.loadFreeTrialStudentWhatsTemplate();
                this.loadFreeTrialStudentEmailTemplate();
                this.loadFreeTrialTeacherEmailTemplate();
                this.loadFreeTrialTeacherWhatsTemplate();
                this.loadFreeTrialConfiguration();
                this.loadStatutFreeTrial();
                this.yesOrNoEmailTeacherSent =  [{label: 'EmailTeacherSent', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoWhatsTeacherSent =  [{label: 'WhatsTeacherSent', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'niveauEtude?.libelle', header: 'Niveau etude'},
            {field: 'dateFreeTrial', header: 'Date free trial'},
            {field: 'link', header: 'Link'},
            {field: 'emailTeacherSent', header: 'Email teacher sent'},
            {field: 'emailTeacherSendingDate', header: 'Email teacher sending date'},
            {field: 'whatsTeacherSent', header: 'Whats teacher sent'},
            {field: 'whatsTeacherSendingDate', header: 'Whats teacher sending date'},
            {field: 'freeTrialStudentWhatsTemplate?.id', header: 'Free trial student whats template'},
            {field: 'freeTrialStudentEmailTemplate?.id', header: 'Free trial student email template'},
            {field: 'freeTrialTeacherEmailTemplate?.id', header: 'Free trial teacher email template'},
            {field: 'freeTrialTeacherWhatsTemplate?.id', header: 'Free trial teacher whats template'},
            {field: 'dateFreeTrialPremierRappel', header: 'Date free trial premier rappel'},
            {field: 'dateFreeTrialPremierDeuxiemeRappel', header: 'Date free trial premier deuxieme rappel'},
            {field: 'nombreStudentTotal', header: 'Nombre student total'},
            {field: 'freeTrialConfiguration?.id', header: 'Free trial configuration'},
            {field: 'nombreStudentAbonne', header: 'Nombre student abonne'},
            {field: 'nombreStudentPresent', header: 'Nombre student present'},
            {field: 'statutFreeTrial?.libelle', header: 'Statut free trial'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadNiveauEtude(){
       this.niveauEtudeService.findAllOptimized().subscribe(niveauEtudes => this.niveauEtudes = niveauEtudes, error => console.log(error))
    }
    public async loadFreeTrialStudentWhatsTemplate(){
       this.freeTrialStudentWhatsTemplateService.findAll().subscribe(freeTrialStudentWhatsTemplates => this.freeTrialStudentWhatsTemplates = freeTrialStudentWhatsTemplates, error => console.log(error))
    }
    public async loadFreeTrialStudentEmailTemplate(){
       this.freeTrialStudentEmailTemplateService.findAll().subscribe(freeTrialStudentEmailTemplates => this.freeTrialStudentEmailTemplates = freeTrialStudentEmailTemplates, error => console.log(error))
    }
    public async loadFreeTrialTeacherEmailTemplate(){
       this.freeTrialTeacherEmailTemplateService.findAll().subscribe(freeTrialTeacherEmailTemplates => this.freeTrialTeacherEmailTemplates = freeTrialTeacherEmailTemplates, error => console.log(error))
    }
    public async loadFreeTrialTeacherWhatsTemplate(){
       this.freeTrialTeacherWhatsTemplateService.findAll().subscribe(freeTrialTeacherWhatsTemplates => this.freeTrialTeacherWhatsTemplates = freeTrialTeacherWhatsTemplates, error => console.log(error))
    }
    public async loadFreeTrialConfiguration(){
       this.freeTrialConfigurationService.findAll().subscribe(freeTrialConfigurations => this.freeTrialConfigurations = freeTrialConfigurations, error => console.log(error))
    }
    public async loadStatutFreeTrial(){
       this.statutFreeTrialService.findAllOptimized().subscribe(statutFreeTrials => this.statutFreeTrials = statutFreeTrials, error => console.log(error))
    }

	public override initDuplicate(res: FreeTrialDto) {
        if (res.freeTrialDetails != null) {
             res.freeTrialDetails.forEach(d => { d.freeTrial = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Prof': e.prof?.ref ,
                'Niveau etude': e.niveauEtude?.libelle ,
                'Date free trial': this.datePipe.transform(e.dateFreeTrial , 'dd/MM/yyyy hh:mm'),
                 'Link': e.link ,
                'Email teacher sent': e.emailTeacherSent? 'Vrai' : 'Faux' ,
                'Email teacher sending date': this.datePipe.transform(e.emailTeacherSendingDate , 'dd/MM/yyyy hh:mm'),
                'Whats teacher sent': e.whatsTeacherSent? 'Vrai' : 'Faux' ,
                'Whats teacher sending date': this.datePipe.transform(e.whatsTeacherSendingDate , 'dd/MM/yyyy hh:mm'),
                'Free trial student whats template': e.freeTrialStudentWhatsTemplate?.id ,
                'Free trial student email template': e.freeTrialStudentEmailTemplate?.id ,
                'Free trial teacher email template': e.freeTrialTeacherEmailTemplate?.id ,
                'Free trial teacher whats template': e.freeTrialTeacherWhatsTemplate?.id ,
                'Date free trial premier rappel': this.datePipe.transform(e.dateFreeTrialPremierRappel , 'dd/MM/yyyy hh:mm'),
                'Date free trial premier deuxieme rappel': this.datePipe.transform(e.dateFreeTrialPremierDeuxiemeRappel , 'dd/MM/yyyy hh:mm'),
                 'Nombre student total': e.nombreStudentTotal ,
                'Free trial configuration': e.freeTrialConfiguration?.id ,
                 'Nombre student abonne': e.nombreStudentAbonne ,
                 'Nombre student present': e.nombreStudentPresent ,
                'Statut free trial': e.statutFreeTrial?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Niveau etude': this.criteria.niveauEtude?.libelle ? this.criteria.niveauEtude?.libelle : environment.emptyForExport ,
            'Date free trial Min': this.criteria.dateFreeTrialFrom ? this.datePipe.transform(this.criteria.dateFreeTrialFrom , this.dateFormat) : environment.emptyForExport ,
            'Date free trial Max': this.criteria.dateFreeTrialTo ? this.datePipe.transform(this.criteria.dateFreeTrialTo , this.dateFormat) : environment.emptyForExport ,
            'Link': this.criteria.link ? this.criteria.link : environment.emptyForExport ,
            'Email teacher sent': this.criteria.emailTeacherSent ? (this.criteria.emailTeacherSent ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Email teacher sending date Min': this.criteria.emailTeacherSendingDateFrom ? this.datePipe.transform(this.criteria.emailTeacherSendingDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Email teacher sending date Max': this.criteria.emailTeacherSendingDateTo ? this.datePipe.transform(this.criteria.emailTeacherSendingDateTo , this.dateFormat) : environment.emptyForExport ,
            'Whats teacher sent': this.criteria.whatsTeacherSent ? (this.criteria.whatsTeacherSent ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Whats teacher sending date Min': this.criteria.whatsTeacherSendingDateFrom ? this.datePipe.transform(this.criteria.whatsTeacherSendingDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Whats teacher sending date Max': this.criteria.whatsTeacherSendingDateTo ? this.datePipe.transform(this.criteria.whatsTeacherSendingDateTo , this.dateFormat) : environment.emptyForExport ,
        //'Free trial student whats template': this.criteria.freeTrialStudentWhatsTemplate?.id ? this.criteria.freeTrialStudentWhatsTemplate?.id : environment.emptyForExport ,
        //'Free trial student email template': this.criteria.freeTrialStudentEmailTemplate?.id ? this.criteria.freeTrialStudentEmailTemplate?.id : environment.emptyForExport ,
        //'Free trial teacher email template': this.criteria.freeTrialTeacherEmailTemplate?.id ? this.criteria.freeTrialTeacherEmailTemplate?.id : environment.emptyForExport ,
        //'Free trial teacher whats template': this.criteria.freeTrialTeacherWhatsTemplate?.id ? this.criteria.freeTrialTeacherWhatsTemplate?.id : environment.emptyForExport ,
            'Date free trial premier rappel Min': this.criteria.dateFreeTrialPremierRappelFrom ? this.datePipe.transform(this.criteria.dateFreeTrialPremierRappelFrom , this.dateFormat) : environment.emptyForExport ,
            'Date free trial premier rappel Max': this.criteria.dateFreeTrialPremierRappelTo ? this.datePipe.transform(this.criteria.dateFreeTrialPremierRappelTo , this.dateFormat) : environment.emptyForExport ,
            'Date free trial premier deuxieme rappel Min': this.criteria.dateFreeTrialPremierDeuxiemeRappelFrom ? this.datePipe.transform(this.criteria.dateFreeTrialPremierDeuxiemeRappelFrom , this.dateFormat) : environment.emptyForExport ,
            'Date free trial premier deuxieme rappel Max': this.criteria.dateFreeTrialPremierDeuxiemeRappelTo ? this.datePipe.transform(this.criteria.dateFreeTrialPremierDeuxiemeRappelTo , this.dateFormat) : environment.emptyForExport ,
            'Nombre student total Min': this.criteria.nombreStudentTotalMin ? this.criteria.nombreStudentTotalMin : environment.emptyForExport ,
            'Nombre student total Max': this.criteria.nombreStudentTotalMax ? this.criteria.nombreStudentTotalMax : environment.emptyForExport ,
        //'Free trial configuration': this.criteria.freeTrialConfiguration?.id ? this.criteria.freeTrialConfiguration?.id : environment.emptyForExport ,
            'Nombre student abonne Min': this.criteria.nombreStudentAbonneMin ? this.criteria.nombreStudentAbonneMin : environment.emptyForExport ,
            'Nombre student abonne Max': this.criteria.nombreStudentAbonneMax ? this.criteria.nombreStudentAbonneMax : environment.emptyForExport ,
            'Nombre student present Min': this.criteria.nombreStudentPresentMin ? this.criteria.nombreStudentPresentMin : environment.emptyForExport ,
            'Nombre student present Max': this.criteria.nombreStudentPresentMax ? this.criteria.nombreStudentPresentMax : environment.emptyForExport ,
        //'Statut free trial': this.criteria.statutFreeTrial?.libelle ? this.criteria.statutFreeTrial?.libelle : environment.emptyForExport ,
        }];
      }
}
