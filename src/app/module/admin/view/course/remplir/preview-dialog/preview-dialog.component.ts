import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SectionDto} from "../../../../../../shared/model/course/Section.model";
import {SectionAdminService} from "../../../../../../shared/service/admin/course/SectionAdmin.service";
import {QuizAdminService} from "../../../../../../shared/service/admin/quiz/QuizAdmin.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-preview-dialog',
    templateUrl: './preview-dialog.component.html',
    styleUrls: ['./preview-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None // Désactive l'encapsulation pour ce composant
})
export class PreviewDialogComponent implements OnInit{
    // @Input() content: string;


    //me
    sections: Array<SectionDto>;
    selectedCardIndex: number = -1 // Initialize with 1 to indicate no card is selected initially
    indice: number
    okPreview: boolean = false;
    okQuiz: boolean = false;
    question: string
    okOption: boolean = false;
    okImage: boolean = false;
    okVideo: boolean = false;
    urlImage: string;
    urlVideo: string


    ngOnInit() {
        this.findAll();
    }
    public findAll(){
        this.sectionService.findAll().subscribe(
            data => {
                data.sort((a, b) => a.numeroOrder - b.numeroOrder);
                this.sections = data
            }

        )
    }


    public selectCard(dto : SectionDto ,index: number): SectionDto {
        this.item = dto
        this.selectedCardIndex = index;
        this.indice = this.selectedCardIndex;
        console.log( index);
        return this.item;
    }

    public nextCard(){
        if(this.selectedCardIndex < this.sections.length - 1){
            this.indice ++;
            this.selectCard(this.sections.at(this.indice),this.indice)
        }
        console.log(this.indice);
        console.log(this.sections.at(this.indice));
    }

    public prevCard() {
        if (this.selectedCardIndex > 0) {
            this.indice--;
            this.selectCard(this.sections.at(this.indice),this.indice)
        }
        console.log(this.indice);
        console.log(this.sections.at(this.indice));
    }

    //

    sanitizeHtml(html: string): SafeHtml {
        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(html)
        return this.safeHtml;
    }

    safeHtml: SafeHtml;
    public previewIsOk(){
        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.item.contenu);
        console.log(this.item.contenu);
        this.okPreview = true;
    }
    constructor(private sectionService: SectionAdminService,
                private quizService: QuizAdminService,
                private sanitizer: DomSanitizer ,private http: HttpClient) {
    }
    get item(): SectionDto {
        return this.sectionService.item;
    }

    set item(value: SectionDto) {
        this.sectionService.item = value;
    }
}
