import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantCriteria} from 'src/app/shared/criteria/inscription/EtudiantCriteria.model';
import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {QuizEtudiantDto} from 'src/app/shared/model/quizetudiant/QuizEtudiant.model';
import {QuizEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/QuizEtudiantAdmin.service';
import {EtatEtudiantScheduleDto} from 'src/app/shared/model/inscriptionref/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatEtudiantScheduleAdmin.service';
import {InteretEtudiantDto} from 'src/app/shared/model/inscriptionref/InteretEtudiant.model';
import {InteretEtudiantAdminService} from 'src/app/shared/service/admin/inscriptionref/InteretEtudiantAdmin.service';
import {StatutSocialDto} from 'src/app/shared/model/inscriptionref/StatutSocial.model';
import {StatutSocialAdminService} from 'src/app/shared/service/admin/inscriptionref/StatutSocialAdmin.service';
import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {LangueDto} from 'src/app/shared/model/inscriptionref/Langue.model';
import {LangueAdminService} from 'src/app/shared/service/admin/inscriptionref/LangueAdmin.service';
import {ReponseEtudiantDto} from 'src/app/shared/model/quizetudiant/ReponseEtudiant.model';
import {ReponseEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/ReponseEtudiantAdmin.service';
import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudeAdmin.service';
import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {SkillDto} from 'src/app/shared/model/inscriptionref/Skill.model';
import {SkillAdminService} from 'src/app/shared/service/admin/inscriptionref/SkillAdmin.service';
import {FonctionDto} from 'src/app/shared/model/inscriptionref/Fonction.model';
import {FonctionAdminService} from 'src/app/shared/service/admin/inscriptionref/FonctionAdmin.service';
import {GroupeEtudiantDetailDto} from 'src/app/shared/model/grpe/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantDetailAdmin.service';
import {PackStudentDto} from 'src/app/shared/model/pack/PackStudent.model';
import {PackStudentAdminService} from 'src/app/shared/service/admin/pack/PackStudentAdmin.service';
import {TeacherLocalityDto} from 'src/app/shared/model/inscriptionref/TeacherLocality.model';
import {TeacherLocalityAdminService} from 'src/app/shared/service/admin/inscriptionref/TeacherLocalityAdmin.service';
import {NiveauEtudeDto} from 'src/app/shared/model/inscriptionref/NiveauEtude.model';
import {NiveauEtudeAdminService} from 'src/app/shared/service/admin/inscriptionref/NiveauEtudeAdmin.service';
@Component({
  selector: 'app-etudiant-create-admin',
  templateUrl: './etudiant-create-admin.component.html'
})
export class EtudiantCreateAdminComponent extends AbstractCreateController<EtudiantDto, EtudiantCriteria, EtudiantAdminService>  implements OnInit {

    private _quizEtudiantsElement = new QuizEtudiantDto();
    private _groupeEtudiantDetailsElement = new GroupeEtudiantDetailDto();


   private _validEtudiantRef = true;
    private _validTeacherLocalityCode = true;
    private _validTeacherLocalityLibelle = true;
    private _validEtatEtudiantScheduleRef = true;
    private _validParcoursCode = true;
    private _validParcoursLibelle = true;
    private _validQuizEtudiantsRef = true;
    private _validGroupeEtudeLibelle = true;
    private _validPackStudentCode = true;
    private _validPackStudentLibelle = true;
    private _validStatutSocialCode = true;
    private _validStatutSocialLibelle = true;
    private _validInteretEtudiantCode = true;
    private _validInteretEtudiantLibelle = true;
    private _validNiveauEtudeLibelle = true;
    private _validNiveauEtudeCode = true;
    private _validSkillCode = true;
    private _validSkillLibelle = true;
    private _validFonctionCode = true;
    private _validFonctionLibelle = true;
    private _validLangueRef = true;
    private _groupeEtudiantDetails: Array<GroupeEtudiantDetailDto> = [];

    constructor( private etudiantService: EtudiantAdminService , private parcoursService: ParcoursAdminService, private quizEtudiantService: QuizEtudiantAdminService, private etatEtudiantScheduleService: EtatEtudiantScheduleAdminService, private interetEtudiantService: InteretEtudiantAdminService, private statutSocialService: StatutSocialAdminService, private groupeEtudiantService: GroupeEtudiantAdminService, private langueService: LangueAdminService, private groupeEtudeService: GroupeEtudeAdminService, private quizService: QuizAdminService, private skillService: SkillAdminService, private fonctionService: FonctionAdminService, private groupeEtudiantDetailService: GroupeEtudiantDetailAdminService, private packStudentService: PackStudentAdminService, private teacherLocalityService: TeacherLocalityAdminService, private niveauEtudeService: NiveauEtudeAdminService) {
        super(etudiantService);
    }

    ngOnInit(): void {
        this.quizEtudiantsElement.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
        this.groupeEtudiantService.findAll().subscribe(data => this.prepareGroupeEtudiantDetails(data));
        this.groupeEtudiantDetailsElement.groupeEtudiant = new GroupeEtudiantDto();
        this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
        this.teacherLocality = new TeacherLocalityDto();
        this.teacherLocalityService.findAll().subscribe((data) => this.teacherLocalitys = data);
        this.etatEtudiantSchedule = new EtatEtudiantScheduleDto();
        this.etatEtudiantScheduleService.findAll().subscribe((data) => this.etatEtudiantSchedules = data);
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.groupeEtude = new GroupeEtudeDto();
        this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
        this.packStudent = new PackStudentDto();
        this.packStudentService.findAll().subscribe((data) => this.packStudents = data);
        this.statutSocial = new StatutSocialDto();
        this.statutSocialService.findAll().subscribe((data) => this.statutSocials = data);
        this.interetEtudiant = new InteretEtudiantDto();
        this.interetEtudiantService.findAll().subscribe((data) => this.interetEtudiants = data);
        this.niveauEtude = new NiveauEtudeDto();
        this.niveauEtudeService.findAll().subscribe((data) => this.niveauEtudes = data);
        this.skill = new SkillDto();
        this.skillService.findAll().subscribe((data) => this.skills = data);
        this.fonction = new FonctionDto();
        this.fonctionService.findAll().subscribe((data) => this.fonctions = data);
        this.langue = new LangueDto();
        this.langueService.findAll().subscribe((data) => this.langues = data);
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

    validateQuizEtudiants(){
        this.errorMessages = new Array();
        this.validateQuizEtudiantsRef();
    }


    public override setValidation(value: boolean){
        this.validEtudiantRef = value;
        this.validQuizEtudiantsRef = value;
    }

    public addQuizEtudiants() {
        if( this.item.quizEtudiants == null )
            this.item.quizEtudiants = new Array<QuizEtudiantDto>();
       this.validateQuizEtudiants();
       if (this.errorMessages.length === 0) {
              this.item.quizEtudiants.push({... this.quizEtudiantsElement});
              this.quizEtudiantsElement = new QuizEtudiantDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletequizEtudiants(p: QuizEtudiantDto) {
        this.item.quizEtudiants.forEach((element, index) => {
            if (element === p) { this.item.quizEtudiants.splice(index, 1); }
        });
    }

    public editquizEtudiants(p: QuizEtudiantDto) {
        this.quizEtudiantsElement = {... p};
        this.activeTab = 0;
    }


    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtudiantRef();
    }

    public validateEtudiantRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEtudiantRef = false;
        } else {
            this.validEtudiantRef = true;
        }
    }

    public validateQuizEtudiantsRef(){
        if (this.quizEtudiantsElement.ref == null) {
            this.errorMessages.push('Ref de la quizEtudiant est  invalide');
            this.validQuizEtudiantsRef = false;
        } else {
            this.validQuizEtudiantsRef = true;
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
    get quiz(): QuizDto {
        return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs(): Array<QuizDto> {
        return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
    }
    get createQuizDialog(): boolean {
       return this.quizService.createDialog;
    }
    set createQuizDialog(value: boolean) {
        this.quizService.createDialog= value;
    }
    get parcours(): ParcoursDto {
        return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss(): Array<ParcoursDto> {
        return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }
    get createParcoursDialog(): boolean {
       return this.parcoursService.createDialog;
    }
    set createParcoursDialog(value: boolean) {
        this.parcoursService.createDialog= value;
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

    get groupeEtudiantDetails(): Array<GroupeEtudiantDetailDto> {
        if( this._groupeEtudiantDetails == null )
            this._groupeEtudiantDetails = new Array();
        return this._groupeEtudiantDetails;
    }

    set groupeEtudiantDetails(value: Array<GroupeEtudiantDetailDto>) {
        this._groupeEtudiantDetails = value;
    }


    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }

    set validEtudiantRef(value: boolean) {
         this._validEtudiantRef = value;
    }

    get validTeacherLocalityCode(): boolean {
        return this._validTeacherLocalityCode;
    }
    set validTeacherLocalityCode(value: boolean) {
        this._validTeacherLocalityCode = value;
    }
    get validTeacherLocalityLibelle(): boolean {
        return this._validTeacherLocalityLibelle;
    }
    set validTeacherLocalityLibelle(value: boolean) {
        this._validTeacherLocalityLibelle = value;
    }
    get validEtatEtudiantScheduleRef(): boolean {
        return this._validEtatEtudiantScheduleRef;
    }
    set validEtatEtudiantScheduleRef(value: boolean) {
        this._validEtatEtudiantScheduleRef = value;
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
    get validQuizEtudiantsRef(): boolean {
        return this._validQuizEtudiantsRef;
    }
    set validQuizEtudiantsRef(value: boolean) {
        this._validQuizEtudiantsRef = value;
    }
    get validGroupeEtudeLibelle(): boolean {
        return this._validGroupeEtudeLibelle;
    }
    set validGroupeEtudeLibelle(value: boolean) {
        this._validGroupeEtudeLibelle = value;
    }
    get validPackStudentCode(): boolean {
        return this._validPackStudentCode;
    }
    set validPackStudentCode(value: boolean) {
        this._validPackStudentCode = value;
    }
    get validPackStudentLibelle(): boolean {
        return this._validPackStudentLibelle;
    }
    set validPackStudentLibelle(value: boolean) {
        this._validPackStudentLibelle = value;
    }
    get validStatutSocialCode(): boolean {
        return this._validStatutSocialCode;
    }
    set validStatutSocialCode(value: boolean) {
        this._validStatutSocialCode = value;
    }
    get validStatutSocialLibelle(): boolean {
        return this._validStatutSocialLibelle;
    }
    set validStatutSocialLibelle(value: boolean) {
        this._validStatutSocialLibelle = value;
    }
    get validInteretEtudiantCode(): boolean {
        return this._validInteretEtudiantCode;
    }
    set validInteretEtudiantCode(value: boolean) {
        this._validInteretEtudiantCode = value;
    }
    get validInteretEtudiantLibelle(): boolean {
        return this._validInteretEtudiantLibelle;
    }
    set validInteretEtudiantLibelle(value: boolean) {
        this._validInteretEtudiantLibelle = value;
    }
    get validNiveauEtudeLibelle(): boolean {
        return this._validNiveauEtudeLibelle;
    }
    set validNiveauEtudeLibelle(value: boolean) {
        this._validNiveauEtudeLibelle = value;
    }
    get validNiveauEtudeCode(): boolean {
        return this._validNiveauEtudeCode;
    }
    set validNiveauEtudeCode(value: boolean) {
        this._validNiveauEtudeCode = value;
    }
    get validSkillCode(): boolean {
        return this._validSkillCode;
    }
    set validSkillCode(value: boolean) {
        this._validSkillCode = value;
    }
    get validSkillLibelle(): boolean {
        return this._validSkillLibelle;
    }
    set validSkillLibelle(value: boolean) {
        this._validSkillLibelle = value;
    }
    get validFonctionCode(): boolean {
        return this._validFonctionCode;
    }
    set validFonctionCode(value: boolean) {
        this._validFonctionCode = value;
    }
    get validFonctionLibelle(): boolean {
        return this._validFonctionLibelle;
    }
    set validFonctionLibelle(value: boolean) {
        this._validFonctionLibelle = value;
    }
    get validLangueRef(): boolean {
        return this._validLangueRef;
    }
    set validLangueRef(value: boolean) {
        this._validLangueRef = value;
    }

    get quizEtudiantsElement(): QuizEtudiantDto {
        if( this._quizEtudiantsElement == null )
            this._quizEtudiantsElement = new QuizEtudiantDto();
        return this._quizEtudiantsElement;
    }

    set quizEtudiantsElement(value: QuizEtudiantDto) {
        this._quizEtudiantsElement = value;
    }
    get groupeEtudiantDetailsElement(): GroupeEtudiantDetailDto {
        if( this._groupeEtudiantDetailsElement == null )
            this._groupeEtudiantDetailsElement = new GroupeEtudiantDetailDto();
        return this._groupeEtudiantDetailsElement;
    }

    set groupeEtudiantDetailsElement(value: GroupeEtudiantDetailDto) {
        this._groupeEtudiantDetailsElement = value;
    }

}
