import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialAdmin.service';
import {FreeTrialDto} from 'src/app/shared/model/freetrial/FreeTrial.model';
import {FreeTrialCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialCriteria.model';

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
  selector: 'app-free-trial-view-admin',
  templateUrl: './free-trial-view-admin.component.html'
})
export class FreeTrialViewAdminComponent extends AbstractViewController<FreeTrialDto, FreeTrialCriteria, FreeTrialAdminService> implements OnInit {

    freeTrialDetails = new FreeTrialDetailDto();
    freeTrialDetailss: Array<FreeTrialDetailDto> = [];

    constructor(private freeTrialService: FreeTrialAdminService, private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateAdminService, private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateAdminService, private statutFreeTrialService: StatutFreeTrialAdminService, private freeTrialConfigurationService: FreeTrialConfigurationAdminService, private etudiantService: EtudiantAdminService, private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateAdminService, private freeTrialDetailService: FreeTrialDetailAdminService, private profService: ProfAdminService, private niveauEtudeService: NiveauEtudeAdminService, private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateAdminService){
        super(freeTrialService);
    }

    ngOnInit(): void {
    }


    get freeTrialTeacherWhatsTemplate(): FreeTrialTeacherWhatsTemplateDto {
       return this.freeTrialTeacherWhatsTemplateService.item;
    }
    set freeTrialTeacherWhatsTemplate(value: FreeTrialTeacherWhatsTemplateDto) {
        this.freeTrialTeacherWhatsTemplateService.item = value;
    }
    get freeTrialTeacherWhatsTemplates(): Array<FreeTrialTeacherWhatsTemplateDto> {
       return this.freeTrialTeacherWhatsTemplateService.items;
    }
    set freeTrialTeacherWhatsTemplates(value: Array<FreeTrialTeacherWhatsTemplateDto>) {
        this.freeTrialTeacherWhatsTemplateService.items = value;
    }
    get freeTrialStudentEmailTemplate(): FreeTrialStudentEmailTemplateDto {
       return this.freeTrialStudentEmailTemplateService.item;
    }
    set freeTrialStudentEmailTemplate(value: FreeTrialStudentEmailTemplateDto) {
        this.freeTrialStudentEmailTemplateService.item = value;
    }
    get freeTrialStudentEmailTemplates(): Array<FreeTrialStudentEmailTemplateDto> {
       return this.freeTrialStudentEmailTemplateService.items;
    }
    set freeTrialStudentEmailTemplates(value: Array<FreeTrialStudentEmailTemplateDto>) {
        this.freeTrialStudentEmailTemplateService.items = value;
    }
    get freeTrialConfiguration(): FreeTrialConfigurationDto {
       return this.freeTrialConfigurationService.item;
    }
    set freeTrialConfiguration(value: FreeTrialConfigurationDto) {
        this.freeTrialConfigurationService.item = value;
    }
    get freeTrialConfigurations(): Array<FreeTrialConfigurationDto> {
       return this.freeTrialConfigurationService.items;
    }
    set freeTrialConfigurations(value: Array<FreeTrialConfigurationDto>) {
        this.freeTrialConfigurationService.items = value;
    }
    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get niveauEtude(): NiveauEtudeDto {
       return this.niveauEtudeService.item;
    }
    set niveauEtude(value: NiveauEtudeDto) {
        this.niveauEtudeService.item = value;
    }
    get niveauEtudes(): Array<NiveauEtudeDto> {
       return this.niveauEtudeService.items;
    }
    set niveauEtudes(value: Array<NiveauEtudeDto>) {
        this.niveauEtudeService.items = value;
    }
    get freeTrialStudentWhatsTemplate(): FreeTrialStudentWhatsTemplateDto {
       return this.freeTrialStudentWhatsTemplateService.item;
    }
    set freeTrialStudentWhatsTemplate(value: FreeTrialStudentWhatsTemplateDto) {
        this.freeTrialStudentWhatsTemplateService.item = value;
    }
    get freeTrialStudentWhatsTemplates(): Array<FreeTrialStudentWhatsTemplateDto> {
       return this.freeTrialStudentWhatsTemplateService.items;
    }
    set freeTrialStudentWhatsTemplates(value: Array<FreeTrialStudentWhatsTemplateDto>) {
        this.freeTrialStudentWhatsTemplateService.items = value;
    }
    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants(): Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }
    get statutFreeTrial(): StatutFreeTrialDto {
       return this.statutFreeTrialService.item;
    }
    set statutFreeTrial(value: StatutFreeTrialDto) {
        this.statutFreeTrialService.item = value;
    }
    get statutFreeTrials(): Array<StatutFreeTrialDto> {
       return this.statutFreeTrialService.items;
    }
    set statutFreeTrials(value: Array<StatutFreeTrialDto>) {
        this.statutFreeTrialService.items = value;
    }
    get freeTrialTeacherEmailTemplate(): FreeTrialTeacherEmailTemplateDto {
       return this.freeTrialTeacherEmailTemplateService.item;
    }
    set freeTrialTeacherEmailTemplate(value: FreeTrialTeacherEmailTemplateDto) {
        this.freeTrialTeacherEmailTemplateService.item = value;
    }
    get freeTrialTeacherEmailTemplates(): Array<FreeTrialTeacherEmailTemplateDto> {
       return this.freeTrialTeacherEmailTemplateService.items;
    }
    set freeTrialTeacherEmailTemplates(value: Array<FreeTrialTeacherEmailTemplateDto>) {
        this.freeTrialTeacherEmailTemplateService.items = value;
    }


}
