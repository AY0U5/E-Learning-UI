import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SectionDto } from "../../../../../../shared/model/course/Section.model";
import { SectionAdminService } from "../../../../../../shared/service/admin/course/SectionAdmin.service";
import { QuizAdminService } from "../../../../../../shared/service/admin/quiz/QuizAdmin.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-preview-dialog',
    templateUrl: './preview-dialog.component.html',
    styleUrls: ['./preview-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PreviewDialogComponent implements OnInit {
    selectedCardIndexP: number = -1;
    indiceP: number;
    sections: Array<SectionDto> = [];
    selectedCardIndex: number = -1;
    indice: number;
    okQuiz: boolean = false;
    question: string;
    okOption: boolean = false;
    okImage: boolean = false;
    okVideo: boolean = false;
    urlImage: string;
    urlVideo: string;

    constructor(
        private sectionService: SectionAdminService,
        private quizService: QuizAdminService,
        private sanitizer: DomSanitizer,
        private http: HttpClient
    ) {}

    get okPreview(): boolean {
        return this.sectionService.okPreview;
    }

    set okPreview(value: boolean) {
        this.sectionService.okPreview = value;
    }

    get items(): Array<SectionDto> {
        return this.sectionService.items;
    }

    set items(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }

    get item(): SectionDto {
        return this.sectionService.item;
    }

    set item(value: SectionDto) {
        this.sectionService.item = value;
    }

    ngOnInit() {
        this.findAllPreview();
    }

    public findAllPreview() {
        this.sectionService.findAll().subscribe(res => {
            this.items = res;
        });
        console.log(this.items);
    }

    public selectCard(dto: SectionDto, index: number): SectionDto {
        this.item = dto;
        this.selectedCardIndex = index;
        this.indice = this.selectedCardIndex;
        console.log(index);
        return this.item;
    }

    public nextCard() {
        if (this.selectedCardIndex < this.sections.length - 1) {
            this.indice++;
            this.selectCard(this.sections[this.indice], this.indice);
        }
        console.log(this.indice);
        console.log(this.sections[this.indice]);
    }

    public prevCard() {
        if (this.selectedCardIndex > 0) {
            this.indice--;
            this.selectCard(this.sections[this.indice], this.indice);
        }
        console.log(this.indice);
        console.log(this.sections[this.indice]);
    }

    public selectCardP(dto: SectionDto, index: number): SectionDto {
        this.item = dto;
        this.selectedCardIndexP = index;
        this.indiceP = this.selectedCardIndexP;
        console.log(index);
        return this.item;
    }

    public nextCardP() {
        if (this.selectedCardIndexP < this.items.length - 1) {
            this.indiceP++;
            this.selectCardP(this.items[this.indiceP], this.indiceP);
        }
        console.log(this.indiceP);
        console.log(this.items[this.indiceP]);
    }

    public prevCardP() {
        if (this.selectedCardIndexP > 0) {
            this.indiceP--;
            this.selectCardP(this.items[this.indiceP], this.indiceP);
        }
        console.log(this.indiceP);
        console.log(this.items[this.indiceP]);
    }

    public sanitizeHtml(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html || '');
    }

    public previewIsOk() {
        this.okPreview = true;
    }
}
