import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {SessionCoursAdminService} from 'src/app/shared/service/admin/learning/SessionCoursAdmin.service';
import {SessionCoursDto} from 'src/app/shared/model/learning/SessionCours.model';
import {SessionCoursCriteria} from 'src/app/shared/criteria/learning/SessionCoursCriteria.model';


import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryAdminService} from 'src/app/shared/service/admin/salary/SalaryAdmin.service';
import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {SessionCoursSectionDto} from 'src/app/shared/model/learning/SessionCoursSection.model';
import {SessionCoursSectionAdminService} from 'src/app/shared/service/admin/learning/SessionCoursSectionAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';

@Component({
  selector: 'app-session-cours-edit-admin',
  templateUrl: './session-cours-edit-admin.component.html'
})
export class SessionCoursEditAdminComponent extends AbstractEditController<SessionCoursDto, SessionCoursCriteria, SessionCoursAdminService>   implements OnInit {

    private _sessionCoursSectionsElement = new SessionCoursSectionDto();

    private _validSessionCoursReference = true;

    private _validProfRef = true;
    private _validCoursCode = true;
    private _validCoursLibelle = true;
    private _validSalaryCode = true;


    private _sessionCoursSections: Array<SessionCoursSectionDto> = [];

    constructor( private sessionCoursService: SessionCoursAdminService , private salaryService: SalaryAdminService, private groupeEtudiantService: GroupeEtudiantAdminService, private sessionCoursSectionService: SessionCoursSectionAdminService, private sectionService: SectionAdminService, private coursService: CoursAdminService, private profService: ProfAdminService) {
        super(sessionCoursService);
    }

    ngOnInit(): void {
        this.sectionService.findAll().subscribe(data => this.prepareSessionCoursSections(data));
        this.sessionCoursSectionsElement.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);

        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
        this.groupeEtudiant = new GroupeEtudiantDto();
        this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
        this.salary = new SalaryDto();
        this.salaryService.findAll().subscribe((data) => this.salarys = data);
    }
    public override prepareEdit() {
        this.item.dateFin = this.sessionCoursService.format(this.item.dateFin);
        this.item.dateDebut = this.sessionCoursService.format(this.item.dateDebut);
    }



    prepareSessionCoursSections(sections: Array<SectionDto>): void{
        if( sections != null){
            sections.forEach(e => {
                const sessionCoursSection = new SessionCoursSectionDto();
                sessionCoursSection.section = e;
                this.sessionCoursSections.push(sessionCoursSection);
            });
        }
    }
    public override setValidation(value: boolean){
        this.validSessionCoursReference = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSessionCoursReference();
    }
    public validateSessionCoursReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validSessionCoursReference = false;
        } else {
            this.validSessionCoursReference = true;
        }
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
   get createProfDialog(): boolean {
       return this.profService.createDialog;
   }
  set createProfDialog(value: boolean) {
       this.profService.createDialog= value;
   }
   get cours(): CoursDto {
       return this.coursService.item;
   }
  set cours(value: CoursDto) {
        this.coursService.item = value;
   }
   get courss(): Array<CoursDto> {
        return this.coursService.items;
   }
   set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
   }
   get createCoursDialog(): boolean {
       return this.coursService.createDialog;
   }
  set createCoursDialog(value: boolean) {
       this.coursService.createDialog= value;
   }
   get groupeEtudiant(): GroupeEtudiantDto {
       return this.groupeEtudiantService.item;
   }
  set groupeEtudiant(value: GroupeEtudiantDto) {
        this.groupeEtudiantService.item = value;
   }
   get groupeEtudiants(): Array<GroupeEtudiantDto> {
        return this.groupeEtudiantService.items;
   }
   set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
        this.groupeEtudiantService.items = value;
   }
   get createGroupeEtudiantDialog(): boolean {
       return this.groupeEtudiantService.createDialog;
   }
  set createGroupeEtudiantDialog(value: boolean) {
       this.groupeEtudiantService.createDialog= value;
   }
   get section(): SectionDto {
       return this.sectionService.item;
   }
  set section(value: SectionDto) {
        this.sectionService.item = value;
   }
   get sections(): Array<SectionDto> {
        return this.sectionService.items;
   }
   set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
   }
   get createSectionDialog(): boolean {
       return this.sectionService.createDialog;
   }
  set createSectionDialog(value: boolean) {
       this.sectionService.createDialog= value;
   }
   get salary(): SalaryDto {
       return this.salaryService.item;
   }
  set salary(value: SalaryDto) {
        this.salaryService.item = value;
   }
   get salarys(): Array<SalaryDto> {
        return this.salaryService.items;
   }
   set salarys(value: Array<SalaryDto>) {
        this.salaryService.items = value;
   }
   get createSalaryDialog(): boolean {
       return this.salaryService.createDialog;
   }
  set createSalaryDialog(value: boolean) {
       this.salaryService.createDialog= value;
   }

    get sessionCoursSections(): Array<SessionCoursSectionDto> {
        if( this._sessionCoursSections == null )
            this._sessionCoursSections = new Array();
         return this._sessionCoursSections;
    }

    set sessionCoursSections(value: Array<SessionCoursSectionDto>) {
        this._sessionCoursSections = value;
    }
    get sessionCoursSectionsElement(): SessionCoursSectionDto {
        if( this._sessionCoursSectionsElement == null )
            this._sessionCoursSectionsElement = new SessionCoursSectionDto();
         return this._sessionCoursSectionsElement;
    }

    set sessionCoursSectionsElement(value: SessionCoursSectionDto) {
        this._sessionCoursSectionsElement = value;
    }

    get validSessionCoursReference(): boolean {
        return this._validSessionCoursReference;
    }
    set validSessionCoursReference(value: boolean) {
        this._validSessionCoursReference = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validCoursCode(): boolean {
        return this._validCoursCode;
    }
    set validCoursCode(value: boolean) {
        this._validCoursCode = value;
    }
    get validCoursLibelle(): boolean {
        return this._validCoursLibelle;
    }
    set validCoursLibelle(value: boolean) {
        this._validCoursLibelle = value;
    }
    get validSalaryCode(): boolean {
        return this._validSalaryCode;
    }
    set validSalaryCode(value: boolean) {
        this._validSalaryCode = value;
    }
}
