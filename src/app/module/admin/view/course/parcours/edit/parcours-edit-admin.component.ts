import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursCriteria} from 'src/app/shared/criteria/course/ParcoursCriteria.model';


import {QuizEtudiantDto} from 'src/app/shared/model/quizetudiant/QuizEtudiant.model';
import {QuizEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/QuizEtudiantAdmin.service';
import {EtatEtudiantScheduleDto} from 'src/app/shared/model/inscriptionref/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatEtudiantScheduleAdmin.service';
import {InteretEtudiantDto} from 'src/app/shared/model/inscriptionref/InteretEtudiant.model';
import {InteretEtudiantAdminService} from 'src/app/shared/service/admin/inscriptionref/InteretEtudiantAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {StatutSocialDto} from 'src/app/shared/model/inscriptionref/StatutSocial.model';
import {StatutSocialAdminService} from 'src/app/shared/service/admin/inscriptionref/StatutSocialAdmin.service';
import {LangueDto} from 'src/app/shared/model/inscriptionref/Langue.model';
import {LangueAdminService} from 'src/app/shared/service/admin/inscriptionref/LangueAdmin.service';
import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {EtatCoursDto} from 'src/app/shared/model/courseref/EtatCours.model';
import {EtatCoursAdminService} from 'src/app/shared/service/admin/courseref/EtatCoursAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
import {CentreDto} from 'src/app/shared/model/courseref/Centre.model';
import {CentreAdminService} from 'src/app/shared/service/admin/courseref/CentreAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudeAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
import {SkillDto} from 'src/app/shared/model/inscriptionref/Skill.model';
import {SkillAdminService} from 'src/app/shared/service/admin/inscriptionref/SkillAdmin.service';
import {FonctionDto} from 'src/app/shared/model/inscriptionref/Fonction.model';
import {FonctionAdminService} from 'src/app/shared/service/admin/inscriptionref/FonctionAdmin.service';
import {PackStudentDto} from 'src/app/shared/model/pack/PackStudent.model';
import {PackStudentAdminService} from 'src/app/shared/service/admin/pack/PackStudentAdmin.service';
import {GroupeEtudiantDetailDto} from 'src/app/shared/model/grpe/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantDetailAdmin.service';
import {TeacherLocalityDto} from 'src/app/shared/model/inscriptionref/TeacherLocality.model';
import {TeacherLocalityAdminService} from 'src/app/shared/service/admin/inscriptionref/TeacherLocalityAdmin.service';
import {NiveauEtudeDto} from 'src/app/shared/model/inscriptionref/NiveauEtude.model';
import {NiveauEtudeAdminService} from 'src/app/shared/service/admin/inscriptionref/NiveauEtudeAdmin.service';
import {EtatParcoursAdminService} from "../../../../../../shared/service/admin/courseref/EtatParcoursAdmin.service";
import {EtatParcoursDto} from "../../../../../../shared/model/courseref/EtatParcours.model";

@Component({
  selector: 'app-parcours-edit-admin',
  templateUrl: './parcours-edit-admin.component.html'
})
export class ParcoursEditAdminComponent extends AbstractEditController<ParcoursDto, ParcoursCriteria, ParcoursAdminService>   implements OnInit {

    private _courssElement = new CoursDto();
    private _etudiantsElement = new EtudiantDto();

    private _validParcoursCode = true;
    private _validParcoursLibelle = true;

    private _validEtatParcoursCode = true;
    private _validEtatParcoursLibelle = true;
    private _validCentreRef = true;
    private _validCourssCode = true;
    private _validCourssLibelle = true;
    private _validEtudiantsRef = true;

    private _groupeEtudiantDetails: Array<GroupeEtudiantDetailDto> = [];


    constructor( private etatParcoursService: EtatParcoursAdminService,private parcoursService: ParcoursAdminService , private etatEtudiantScheduleService: EtatEtudiantScheduleAdminService, private interetEtudiantService: InteretEtudiantAdminService, private etudiantService: EtudiantAdminService, private statutSocialService: StatutSocialAdminService, private groupeEtudiantService: GroupeEtudiantAdminService, private langueService: LangueAdminService, private etatCoursService: EtatCoursAdminService, private centreService: CentreAdminService, private coursService: CoursAdminService, private groupeEtudeService: GroupeEtudeAdminService, private skillService: SkillAdminService, private fonctionService: FonctionAdminService, private packStudentService: PackStudentAdminService, private teacherLocalityService: TeacherLocalityAdminService, private niveauEtudeService: NiveauEtudeAdminService) {
        super(parcoursService);
    }

    ngOnInit(): void {
        this.courssElement.etatCours = new EtatCoursDto();
        this.etatCoursService.findAll().subscribe((data) => this.etatCourss = data);

        this.etudiantsElement.teacherLocality = new TeacherLocalityDto();
        this.teacherLocalityService.findAll().subscribe((data) => this.teacherLocalitys = data);
        this.etudiantsElement.etatEtudiantSchedule = new EtatEtudiantScheduleDto();
        this.etatEtudiantScheduleService.findAll().subscribe((data) => this.etatEtudiantSchedules = data);
        this.etudiantsElement.groupeEtude = new GroupeEtudeDto();
        this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
        this.etudiantsElement.packStudent = new PackStudentDto();
        this.packStudentService.findAll().subscribe((data) => this.packStudents = data);
        this.etudiantsElement.statutSocial = new StatutSocialDto();
        this.statutSocialService.findAll().subscribe((data) => this.statutSocials = data);
        this.etudiantsElement.interetEtudiant = new InteretEtudiantDto();
        this.interetEtudiantService.findAll().subscribe((data) => this.interetEtudiants = data);
        this.etudiantsElement.niveauEtude = new NiveauEtudeDto();
        this.niveauEtudeService.findAll().subscribe((data) => this.niveauEtudes = data);
        this.etudiantsElement.skill = new SkillDto();
        this.skillService.findAll().subscribe((data) => this.skills = data);
        this.etudiantsElement.fonction = new FonctionDto();
        this.fonctionService.findAll().subscribe((data) => this.fonctions = data);
        this.etudiantsElement.langue = new LangueDto();
        this.langueService.findAll().subscribe((data) => this.langues = data);
         this.groupeEtudiantService.findAll().subscribe(data => this.prepareGroupeEtudiantDetails(data));

        this.etatParcours = new EtatParcoursDto();
        this.etatParcoursService.findAll().subscribe((data) => this.etatParcourss = data);
        this.centre = new CentreDto();
        this.centreService.findAll().subscribe((data) => this.centres = data);
    }
    public override prepareEdit() {
        this.item.datePublication = this.parcoursService.format(this.item.datePublication);
        this.item.dateCreation = this.parcoursService.format(this.item.dateCreation);
    }



    prepareGroupeEtudiantDetails(groupeEtudiants: Array<GroupeEtudiantDto>): void{
        if( groupeEtudiants != null){
            groupeEtudiants.forEach(e => {
                const groupeEtudiantDetail = new GroupeEtudiantDetailDto();
                groupeEtudiantDetail.groupeEtudiant = e;
                this.groupeEtudiantDetails.push(groupeEtudiantDetail);
            });
        }
   }
    public validateCourss(){
        this.errorMessages = new Array();
        this.validateCourssCode();
        this.validateCourssLibelle();
    }
    public validateEtudiants(){
        this.errorMessages = new Array();
        this.validateEtudiantsRef();
    }
    public override setValidation(value: boolean){
        this.validParcoursCode = value;
        this.validParcoursLibelle = value;
        this.validCourssCode = value;
        this.validCourssLibelle = value;
        this.validEtudiantsRef = value;
        }
   public addCourss() {
        if( this.item.courss == null )
            this.item.courss = new Array<CoursDto>();
       this.validateCourss();
       if (this.errorMessages.length === 0) {
            if(this.courssElement.id == null){
                this.item.courss.push(this.courssElement);
            }else{
                const index = this.item.courss.findIndex(e => e.id == this.courssElement.id);
                this.item.courss[index] = this.courssElement;
            }
          this.courssElement = new CoursDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteCourss(p: CoursDto) {
        this.item.courss.forEach((element, index) => {
            if (element === p) { this.item.courss.splice(index, 1); }
        });
    }

    public editCourss(p: CoursDto) {
        this.courssElement = {... p};
        this.activeTab = 0;
    }
   public addEtudiants() {
        if( this.item.etudiants == null )
            this.item.etudiants = new Array<EtudiantDto>();
       this.validateEtudiants();
       if (this.errorMessages.length === 0) {
            if(this.etudiantsElement.id == null){
                this.item.etudiants.push(this.etudiantsElement);
            }else{
                const index = this.item.etudiants.findIndex(e => e.id == this.etudiantsElement.id);
                this.item.etudiants[index] = this.etudiantsElement;
            }
          this.etudiantsElement = new EtudiantDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteEtudiants(p: EtudiantDto) {
        this.item.etudiants.forEach((element, index) => {
            if (element === p) { this.item.etudiants.splice(index, 1); }
        });
    }

    public editEtudiants(p: EtudiantDto) {
        this.etudiantsElement = {... p};
        this.activeTab = 0;
    }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateParcoursCode();
        this.validateParcoursLibelle();
    }
    public validateParcoursCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validParcoursCode = false;
        } else {
            this.validParcoursCode = true;
        }
    }
    public validateParcoursLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validParcoursLibelle = false;
        } else {
            this.validParcoursLibelle = true;
        }
    }


    private validateCourssCode(){
        if (this.courssElement.code == null) {
        this.errorMessages.push('Code de la cours est  invalide');
            this.validCourssCode = false;
        } else {
            this.validCourssCode = true;
        }
    }
    private validateCourssLibelle(){
        if (this.courssElement.libelle == null) {
        this.errorMessages.push('Libelle de la cours est  invalide');
            this.validCourssLibelle = false;
        } else {
            this.validCourssLibelle = true;
        }
    }
    private validateEtudiantsRef(){
        if (this.etudiantsElement.ref == null) {
        this.errorMessages.push('Ref de la etudiant est  invalide');
            this.validEtudiantsRef = false;
        } else {
            this.validEtudiantsRef = true;
        }
    }


   get langue(): LangueDto {
       return this.langueService.item;
   }
  set langue(value: LangueDto) {
        this.langueService.item = value;
   }
   get langues(): Array<LangueDto> {
        return this.langueService.items;
   }
   set langues(value: Array<LangueDto>) {
        this.langueService.items = value;
   }
   get createLangueDialog(): boolean {
       return this.langueService.createDialog;
   }
  set createLangueDialog(value: boolean) {
       this.langueService.createDialog= value;
   }
   get packStudent(): PackStudentDto {
       return this.packStudentService.item;
   }
  set packStudent(value: PackStudentDto) {
        this.packStudentService.item = value;
   }
   get packStudents(): Array<PackStudentDto> {
        return this.packStudentService.items;
   }
   set packStudents(value: Array<PackStudentDto>) {
        this.packStudentService.items = value;
   }
   get createPackStudentDialog(): boolean {
       return this.packStudentService.createDialog;
   }
  set createPackStudentDialog(value: boolean) {
       this.packStudentService.createDialog= value;
   }
   get etatCours(): EtatCoursDto {
       return this.etatCoursService.item;
   }
  set etatCours(value: EtatCoursDto) {
        this.etatCoursService.item = value;
   }
   get etatCourss(): Array<EtatCoursDto> {
        return this.etatCoursService.items;
   }
   set etatCourss(value: Array<EtatCoursDto>) {
        this.etatCoursService.items = value;
   }
   get createEtatCoursDialog(): boolean {
       return this.etatCoursService.createDialog;
   }
  set createEtatCoursDialog(value: boolean) {
       this.etatCoursService.createDialog= value;
   }
   get statutSocial(): StatutSocialDto {
       return this.statutSocialService.item;
   }
  set statutSocial(value: StatutSocialDto) {
        this.statutSocialService.item = value;
   }
   get statutSocials(): Array<StatutSocialDto> {
        return this.statutSocialService.items;
   }
   set statutSocials(value: Array<StatutSocialDto>) {
        this.statutSocialService.items = value;
   }
   get createStatutSocialDialog(): boolean {
       return this.statutSocialService.createDialog;
   }
  set createStatutSocialDialog(value: boolean) {
       this.statutSocialService.createDialog= value;
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
   get createNiveauEtudeDialog(): boolean {
       return this.niveauEtudeService.createDialog;
   }
  set createNiveauEtudeDialog(value: boolean) {
       this.niveauEtudeService.createDialog= value;
   }
   get skill(): SkillDto {
       return this.skillService.item;
   }
  set skill(value: SkillDto) {
        this.skillService.item = value;
   }
   get skills(): Array<SkillDto> {
        return this.skillService.items;
   }
   set skills(value: Array<SkillDto>) {
        this.skillService.items = value;
   }
   get createSkillDialog(): boolean {
       return this.skillService.createDialog;
   }
  set createSkillDialog(value: boolean) {
       this.skillService.createDialog= value;
   }
   get teacherLocality(): TeacherLocalityDto {
       return this.teacherLocalityService.item;
   }
  set teacherLocality(value: TeacherLocalityDto) {
        this.teacherLocalityService.item = value;
   }
   get teacherLocalitys(): Array<TeacherLocalityDto> {
        return this.teacherLocalityService.items;
   }
   set teacherLocalitys(value: Array<TeacherLocalityDto>) {
        this.teacherLocalityService.items = value;
   }
   get createTeacherLocalityDialog(): boolean {
       return this.teacherLocalityService.createDialog;
   }
  set createTeacherLocalityDialog(value: boolean) {
       this.teacherLocalityService.createDialog= value;
   }
   get etatEtudiantSchedule(): EtatEtudiantScheduleDto {
       return this.etatEtudiantScheduleService.item;
   }
  set etatEtudiantSchedule(value: EtatEtudiantScheduleDto) {
        this.etatEtudiantScheduleService.item = value;
   }
   get etatEtudiantSchedules(): Array<EtatEtudiantScheduleDto> {
        return this.etatEtudiantScheduleService.items;
   }
   set etatEtudiantSchedules(value: Array<EtatEtudiantScheduleDto>) {
        this.etatEtudiantScheduleService.items = value;
   }
   get createEtatEtudiantScheduleDialog(): boolean {
       return this.etatEtudiantScheduleService.createDialog;
   }
  set createEtatEtudiantScheduleDialog(value: boolean) {
       this.etatEtudiantScheduleService.createDialog= value;
   }
   get interetEtudiant(): InteretEtudiantDto {
       return this.interetEtudiantService.item;
   }
  set interetEtudiant(value: InteretEtudiantDto) {
        this.interetEtudiantService.item = value;
   }
   get interetEtudiants(): Array<InteretEtudiantDto> {
        return this.interetEtudiantService.items;
   }
   set interetEtudiants(value: Array<InteretEtudiantDto>) {
        this.interetEtudiantService.items = value;
   }
   get createInteretEtudiantDialog(): boolean {
       return this.interetEtudiantService.createDialog;
   }
  set createInteretEtudiantDialog(value: boolean) {
       this.interetEtudiantService.createDialog= value;
   }
   get fonction(): FonctionDto {
       return this.fonctionService.item;
   }
  set fonction(value: FonctionDto) {
        this.fonctionService.item = value;
   }
   get fonctions(): Array<FonctionDto> {
        return this.fonctionService.items;
   }
   set fonctions(value: Array<FonctionDto>) {
        this.fonctionService.items = value;
   }
   get createFonctionDialog(): boolean {
       return this.fonctionService.createDialog;
   }
  set createFonctionDialog(value: boolean) {
       this.fonctionService.createDialog= value;
   }
    get etatParcours(): EtatParcoursDto {
        return this.etatParcoursService.item;
    }
    set etatParcours(value: EtatParcoursDto) {
        this.etatParcoursService.item = value;
    }
    get etatParcourss(): Array<EtatParcoursDto> {
        return this.etatParcoursService.items;
    }
    set etatParcourss(value: Array<EtatParcoursDto>) {
        this.etatParcoursService.items = value;
    }
    get createEtatParcoursDialog(): boolean {
        return this.etatParcoursService.createDialog;
    }
    set createEtatParcoursDialog(value: boolean) {
        this.etatParcoursService.createDialog= value;
    }
    get validEtatParcoursCode(): boolean {
        return this._validEtatParcoursCode;
    }
    set validEtatParcoursCode(value: boolean) {
        this._validEtatParcoursCode = value;
    }
    get validEtatParcoursLibelle(): boolean {
        return this._validEtatParcoursLibelle;
    }
    set validEtatParcoursLibelle(value: boolean) {
        this._validEtatParcoursLibelle = value;
    }

   get centre(): CentreDto {
       return this.centreService.item;
   }
  set centre(value: CentreDto) {
        this.centreService.item = value;
   }
   get centres(): Array<CentreDto> {
        return this.centreService.items;
   }
   set centres(value: Array<CentreDto>) {
        this.centreService.items = value;
   }
   get createCentreDialog(): boolean {
       return this.centreService.createDialog;
   }
  set createCentreDialog(value: boolean) {
       this.centreService.createDialog= value;
   }
   get groupeEtude(): GroupeEtudeDto {
       return this.groupeEtudeService.item;
   }
  set groupeEtude(value: GroupeEtudeDto) {
        this.groupeEtudeService.item = value;
   }
   get groupeEtudes(): Array<GroupeEtudeDto> {
        return this.groupeEtudeService.items;
   }
   set groupeEtudes(value: Array<GroupeEtudeDto>) {
        this.groupeEtudeService.items = value;
   }
   get createGroupeEtudeDialog(): boolean {
       return this.groupeEtudeService.createDialog;
   }
  set createGroupeEtudeDialog(value: boolean) {
       this.groupeEtudeService.createDialog= value;
   }

    get courssElement(): CoursDto {
        if( this._courssElement == null )
            this._courssElement = new CoursDto();
         return this._courssElement;
    }

    set courssElement(value: CoursDto) {
        this._courssElement = value;
    }
    get etudiantsElement(): EtudiantDto {
        if( this._etudiantsElement == null )
            this._etudiantsElement = new EtudiantDto();
         return this._etudiantsElement;
    }

    set etudiantsElement(value: EtudiantDto) {
        this._etudiantsElement = value;
    }

    get groupeEtudiantDetails(): Array<GroupeEtudiantDetailDto> {
        if( this._groupeEtudiantDetails == null )
            this._groupeEtudiantDetails = new Array();
        return this._groupeEtudiantDetails;
    }

    set groupeEtudiantDetails(value: Array<GroupeEtudiantDetailDto>) {
        this._groupeEtudiantDetails = value;
    }
    get validParcoursCode(): boolean {
        return this._validParcoursCode;
    }
    set validParcoursCode(value: boolean) {
        this._validParcoursCode = value;
    }
    get validParcoursLibelle(): boolean {
        return this._validParcoursLibelle;
    }
    set validParcoursLibelle(value: boolean) {
        this._validParcoursLibelle = value;
    }

    get validCentreRef(): boolean {
        return this._validCentreRef;
    }
    set validCentreRef(value: boolean) {
        this._validCentreRef = value;
    }
    get validCourssCode(): boolean {
        return this._validCourssCode;
    }
    set validCourssCode(value: boolean) {
        this._validCourssCode = value;
    }
    get validCourssLibelle(): boolean {
        return this._validCourssLibelle;
    }
    set validCourssLibelle(value: boolean) {
        this._validCourssLibelle = value;
    }
    get validEtudiantsRef(): boolean {
        return this._validEtudiantsRef;
    }
    set validEtudiantsRef(value: boolean) {
        this._validEtudiantsRef = value;
    }
}
