import {Component, OnInit} from '@angular/core';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionCriteria} from 'src/app/shared/criteria/quiz/QuestionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {ServiceLocator} from "../../../../../../zynerator/service/ServiceLocator";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-question-list-admin',
  templateUrl: './question-list-admin.component.html',
    styleUrls : ['./question-list-admin.component.css'],
    providers: [ConfirmationService,MessageService]
})
export class QuestionListAdminComponent extends AbstractListController<QuestionDto, QuestionCriteria, QuestionAdminService>  implements OnInit {

    override fileName = 'Question';

    get toaddimage(): boolean {
        return this.questionService.toaddimage;
    }

    set toaddimage(value: boolean) {
        this.questionService.toaddimage = value;
    }

    get toaddvideo(): boolean {
        return this.questionService.toaddvideo;
    }

    set toaddvideo(value: boolean) {
        this.questionService.toaddvideo = value;
    }
    //video
    /*getEmbedUrl(url: string): string {
        const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : '';
    }*/
    getEmbedUrl(url: string): SafeResourceUrl {
        if (url.startsWith('http') || url.startsWith('https')) {
            const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
            const embedUrl = videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : '';
            return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
        } else {
            const localUrl = `file:///${url.replace(/\\/g, '/')}`;
            return this.sanitizer.bypassSecurityTrustResourceUrl(localUrl);
        }
    }
    playVideo(videoElement: HTMLVideoElement) {
        videoElement.play();
    }

    pauseVideo(videoElement: HTMLVideoElement) {
        videoElement.pause();
    }


    //

    //delete


    public async deleteqst(dto: QuestionDto) {

        this.confiService.confirm({
            message: 'Voulez-vous supprimer cet élément ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.questionService.delete(dto).subscribe(status => {
                    if (status > 0) {
                        const position = this.itemsOfQuiz.indexOf(dto);
                        position > -1 ? this.itemsOfQuiz.splice(position, 1) : false;
                        this.msgService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'Element Supprimé',
                            life: 3000
                        });
                    }

                }, error => console.log(error));
            }
        });

    }
    //

    get itemsOfQuiz(): Array<QuestionDto> {
        return this.questionService.itemsOfQuiz;
    }

    set itemsOfQuiz(value: Array<QuestionDto>) {
        this.questionService.itemsOfQuiz = value;
    }


    //


    typeDeQuestions: Array<TypeDeQuestionDto>;
    quizs: Array<QuizDto>;
    homeWorks: Array<HomeWorkDto>;
    typeReponse: MenuItem[] ;


    shows() {
        console.log(this.item);
    console.log(this.itemReponse);
    }


    get itemReponse(): ReponseDto {
        return this.reponseService.item;
    }

    set itemReponse(value: ReponseDto) {
        this.reponseService.item = value;
    }

    get reponseCourte(): boolean {
        return this.reponseService.reponseCourte;
    }
    set reponseCourte(value: boolean) {
        this.reponseService.reponseCourte = value;
    }
    get paragraphe(): boolean {
        return this.reponseService.paragraphe;
    }

    set paragraphe(value: boolean) {
        this.reponseService.paragraphe = value;
    }

    get caseAcoche(): boolean {
        return this.reponseService.caseAcoche;
    }

    set caseAcoche(value: boolean) {
        this.reponseService.caseAcoche = value;
    }

    get choixMultiple(): boolean {
        return this.reponseService.choixMultiple;
    }

    set choixMultiple(value: boolean) {
        this.reponseService.choixMultiple = value;
    }

    get showreponsenbr(): boolean {
        return this.reponseService.showreponsenbr;
    }

    set showreponsenbr(value: boolean) {
        this.reponseService.showreponsenbr = value;
    }



    //

    public get itemQuizShow(): QuizDto {
        return this.quizService.itemQuizShow;
    }

    public set itemQuizShow(value: QuizDto) {
        this.quizService.itemQuizShow = value;
    }
    /*public showquizz(): void {
        this.quizService.findByIdWithAssociatedList(this.itemQuizShow).subscribe( res =>
        {
          this.itemsOfQuiz = res.questions;
        }

        )
    }*/
    protected _errorMessages = new Array<string>();
    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }
    isEmpty(value: string): boolean {
        return !value || value.trim().length === 0;
    }
    //

    constructor(private sanitizer: DomSanitizer,private msgService: MessageService, private confiService: ConfirmationService, private questionService: QuestionAdminService , private quizService: QuizAdminService, private typeDeQuestionService: TypeDeQuestionAdminService, private reponseService: ReponseAdminService, private homeWorkService: HomeWorkAdminService) {
        super(questionService);
        this.msgService = ServiceLocator.injector.get(MessageService);
        this.confiService = ServiceLocator.injector.get(ConfirmationService);
        this.typeReponse = [
            {
                label: 'Réponse Courte',
                icon: 'pi pi-align-right',
                command: () => {
                    this.caseAcoche = false ;
                    this.choixMultiple = false;
                    this.paragraphe = false;
                    if(!this.isEmpty(this.item.libelle) ){
                    this.reponseCourte = true;
                    this.itemReponse.etatReponse = 'Reponse Courte';
                    }else {
                        this.errorMessages = new Array<string>();
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Erreurs',
                            detail: 'Ajouter Question'
                        });
                    }
                }
            },
            {
                label: 'Paragraphe',
                icon: 'pi pi-align-left',
                command: () => {
                    this.reponseCourte = false;
                    this.caseAcoche = false ;
                    this.choixMultiple = false;
                    if(!this.isEmpty(this.item.libelle) ){
                        this.paragraphe = true;
                        this.itemReponse.etatReponse = 'Paragraphe';

                    }else {
                        this.errorMessages = new Array<string>();

                        this.messageService.add({
                            severity: 'error',
                            summary: 'Erreurs',
                            detail: 'Ajouter Question'
                        });
                    }
                }

            },
            { separator: true },
            {
                label: 'Choix multiples',
                icon: 'pi pi-check-square ',
                command: () => {
                    this.reponseCourte = false;
                    this.caseAcoche = false ;
                    this.paragraphe = false;
                    if(!this.isEmpty(this.item.libelle) ){
                        this.choixMultiple = true;
                        this.itemReponse.etatReponse = 'Choix multiples';
                    }else {
                        this.errorMessages = new Array<string>();
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Erreurs',
                            detail: 'Ajouter Question'
                        });
                    }
                }
            },

            {
                label: 'Cases a cocher',
                icon: 'pi pi-circle',
                command: () => {
                    this.reponseCourte = false;
                    this.choixMultiple = false;
                    this.paragraphe = false;
                    if(!this.isEmpty(this.item.libelle)){
                        this.caseAcoche = true ;
                        this.itemReponse.etatReponse = 'Cases a cocher';
                    }else {
                        this.errorMessages = new Array<string>();
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Erreurs',
                            detail: 'Ajouter Question'
                        });
                    }
                }

            }
        ];


    }


    ngOnInit(): void {
        this.activateSecurityConstraint('Question').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadTypeDeQuestion();
                this.loadQuiz();
                this.loadHomeWork();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'urlImg', header: 'Url img'},
            {field: 'urlVideo', header: 'Url video'},
            {field: 'numero', header: 'Numero'},
            {field: 'pointReponseJuste', header: 'Point reponse juste'},
            {field: 'pointReponsefausse', header: 'Point reponsefausse'},
            {field: 'typeDeQuestion?.lib', header: 'Type de question'},
            {field: 'quiz?.lib', header: 'Quiz'},
            {field: 'homeWork?.libelle', header: 'Home work'},
        ];
    }


    public async loadTypeDeQuestion(){
       this.typeDeQuestionService.findAllOptimized().subscribe(typeDeQuestions => this.typeDeQuestions = typeDeQuestions, error => console.log(error))
    }
    public async loadQuiz(){
       this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs, error => console.log(error))
    }
    public async loadHomeWork(){
       this.homeWorkService.findAllOptimized().subscribe(homeWorks => this.homeWorks = homeWorks, error => console.log(error))
    }

	public override initDuplicate(res: QuestionDto) {
        if (res.reponses != null) {
             res.reponses.forEach(d => { d.question = null; d.id = null; });
        }
	}




   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Url img': e.urlImg ,
                 'Url video': e.urlVideo ,
                 'Numero': e.numero ,
                 'Point reponse juste': e.pointReponseJuste ,
                 'Point reponsefausse': e.pointReponsefausse ,
                'Type de question': e.typeDeQuestion?.lib ,
                'Quiz': e.quiz?.lib ,
                'Home work': e.homeWork?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Url img': this.criteria.urlImg ? this.criteria.urlImg : environment.emptyForExport ,
            'Url video': this.criteria.urlVideo ? this.criteria.urlVideo : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
            'Point reponse juste Min': this.criteria.pointReponseJusteMin ? this.criteria.pointReponseJusteMin : environment.emptyForExport ,
            'Point reponse juste Max': this.criteria.pointReponseJusteMax ? this.criteria.pointReponseJusteMax : environment.emptyForExport ,
            'Point reponsefausse Min': this.criteria.pointReponsefausseMin ? this.criteria.pointReponsefausseMin : environment.emptyForExport ,
            'Point reponsefausse Max': this.criteria.pointReponsefausseMax ? this.criteria.pointReponsefausseMax : environment.emptyForExport ,
        //'Type de question': this.criteria.typeDeQuestion?.lib ? this.criteria.typeDeQuestion?.lib : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
        //'Home work': this.criteria.homeWork?.libelle ? this.criteria.homeWork?.libelle : environment.emptyForExport ,
        }];
      }


    addImage() {
        this.toaddimage = true;
    }

    addvideo() {
        this.toaddvideo = true;
    }

    hidedia() {

    }
}
