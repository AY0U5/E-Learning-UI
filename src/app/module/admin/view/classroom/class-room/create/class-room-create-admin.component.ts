import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ClassRoomAdminService} from 'src/app/shared/service/admin/classroom/ClassRoomAdmin.service';
import {ClassRoomDto} from 'src/app/shared/model/classroom/ClassRoom.model';
import {ClassRoomCriteria} from 'src/app/shared/criteria/classroom/ClassRoomCriteria.model';
import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {EtudiantClassRoomDto} from 'src/app/shared/model/inscriptionref/EtudiantClassRoom.model';
import {EtudiantClassRoomAdminService} from 'src/app/shared/service/admin/inscriptionref/EtudiantClassRoomAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {QuizClassRoomDto} from 'src/app/shared/model/quiz/QuizClassRoom.model';
import {QuizClassRoomAdminService} from 'src/app/shared/service/admin/quiz/QuizClassRoomAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-class-room-create-admin',
  templateUrl: './class-room-create-admin.component.html'
})
export class ClassRoomCreateAdminComponent extends AbstractCreateController<ClassRoomDto, ClassRoomCriteria, ClassRoomAdminService>  implements OnInit {

    private _etudiantClassRoomsElement = new EtudiantClassRoomDto();
    private _quizClassRoomsElement = new QuizClassRoomDto();


   private _validClassRoomLibelle = true;
    private _validProfRef = true;
    private _etudiantClassRooms: Array<EtudiantClassRoomDto> = [];
    private _quizClassRooms: Array<QuizClassRoomDto> = [];

    constructor( private classRoomService: ClassRoomAdminService , private quizService: QuizAdminService, private etudiantClassRoomService: EtudiantClassRoomAdminService, private etudiantService: EtudiantAdminService, private quizClassRoomService: QuizClassRoomAdminService, private profService: ProfAdminService) {
        super(classRoomService);
    }

    ngOnInit(): void {
        this.etudiantService.findAll().subscribe(data => this.prepareEtudiantClassRooms(data));
        this.etudiantClassRoomsElement.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.quizService.findAll().subscribe(data => this.prepareQuizClassRooms(data));
        this.quizClassRoomsElement.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
    }


     prepareEtudiantClassRooms(etudiants: Array<EtudiantDto>): void{
        if( etudiants != null){
                etudiants.forEach(e => {
                const etudiantClassRoom = new EtudiantClassRoomDto();
                etudiantClassRoom.etudiant = e;
                this.etudiantClassRooms.push(etudiantClassRoom);
            });
        }
    }
     prepareQuizClassRooms(quizs: Array<QuizDto>): void{
        if( quizs != null){
                quizs.forEach(e => {
                const quizClassRoom = new QuizClassRoomDto();
                quizClassRoom.quiz = e;
                this.quizClassRooms.push(quizClassRoom);
            });
        }
    }



    public override setValidation(value: boolean){
        this.validClassRoomLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClassRoomLibelle();
    }

    public validateClassRoomLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validClassRoomLibelle = false;
        } else {
            this.validClassRoomLibelle = true;
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
    get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
    }
    set createEtudiantDialog(value: boolean) {
        this.etudiantService.createDialog= value;
    }

    get etudiantClassRooms(): Array<EtudiantClassRoomDto> {
        if( this._etudiantClassRooms == null )
            this._etudiantClassRooms = new Array();
        return this._etudiantClassRooms;
    }

    set etudiantClassRooms(value: Array<EtudiantClassRoomDto>) {
        this._etudiantClassRooms = value;
    }
    get quizClassRooms(): Array<QuizClassRoomDto> {
        if( this._quizClassRooms == null )
            this._quizClassRooms = new Array();
        return this._quizClassRooms;
    }

    set quizClassRooms(value: Array<QuizClassRoomDto>) {
        this._quizClassRooms = value;
    }


    get validClassRoomLibelle(): boolean {
        return this._validClassRoomLibelle;
    }

    set validClassRoomLibelle(value: boolean) {
         this._validClassRoomLibelle = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }

    get etudiantClassRoomsElement(): EtudiantClassRoomDto {
        if( this._etudiantClassRoomsElement == null )
            this._etudiantClassRoomsElement = new EtudiantClassRoomDto();
        return this._etudiantClassRoomsElement;
    }

    set etudiantClassRoomsElement(value: EtudiantClassRoomDto) {
        this._etudiantClassRoomsElement = value;
    }
    get quizClassRoomsElement(): QuizClassRoomDto {
        if( this._quizClassRoomsElement == null )
            this._quizClassRoomsElement = new QuizClassRoomDto();
        return this._quizClassRoomsElement;
    }

    set quizClassRoomsElement(value: QuizClassRoomDto) {
        this._quizClassRoomsElement = value;
    }

}
