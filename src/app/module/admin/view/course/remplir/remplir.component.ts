import {Component, OnInit} from '@angular/core';
import {SectionDto} from "../../../../../shared/model/course/Section.model";
import {SectionAdminService} from "../../../../../shared/service/admin/course/SectionAdmin.service";

@Component({
  selector: 'app-remplir',
  templateUrl: './remplir.component.html',
  styleUrls: ['./remplir.component.css']
})
export class RemplirComponent implements OnInit{

    selectedCardIndex: number = -1 // Initialize with 1 to indicate no card is selected initially
    indice: number
    sections: Array<SectionDto>
    okPreview: boolean = false;
    okQuiz: boolean = false;
    question: string
    okOption: boolean = false;
    okImage: boolean = false;
    okVideo: boolean = false;
    urlImage: string;

    ngOnInit() {
        this.findAll()
    }

    constructor(private sectionService: SectionAdminService) {
    }

    public findAll(){
        this.sectionService.findAll().subscribe(
            data => {
                data.sort((a, b) => a.numeroOrder - b.numeroOrder);
                this.sections = data
            }

        )
    }

    public previewIsOk(){
        this.okPreview = true;
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

    get item(): SectionDto {
        return this.sectionService.item;
    }

    set item(value: SectionDto) {
        this.sectionService.item = value;
    }
    get itemedit(): SectionDto {
        return this.sectionService.item;
    }

    set itemedit(value: SectionDto) {
        this.sectionService.item = value;
    }

    public saveContent(){
        console.log(this.item);
       this.sectionService.edit().subscribe(() => {
             //Optional: Handle success or perform any additional actions
            alert('Content saved successfully');
        }, (error) => {
            // Optional: Handle error
            alert('Error saving content:' + error.message);
        });
    }

    stripHtmlTags(htmlString: string): string {
        const div = document.createElement('div');
        div.innerHTML = htmlString;
        return div.textContent || div.innerText || '';
    }

    public getLiens(){
        var divHtml = document.getElementById('editeur')
        var liens = divHtml.getElementsByTagName('a');
        for (var i = 0; i < liens.length; i++) {
            console.log(liens[i].getAttribute('href'));
        }
        return liens;
    }

    public quizIsOk(){
        return this.okQuiz = true;
    }
    public optionIsOk(){
        return this.okOption = true;
    }
    public optionIshide(){
        return this.okOption = false;
    }
    public imageIsOk(){
        return this.okImage = true;
    }
    public videoIsOk(){
        return this.okVideo = true;
    }
    public saveImage(urlImage : string){
        let sec = this.selectCard(this.sections.at(this.indice),this.indice);
        sec.urlImage = urlImage;
        this.sectionService.edit().subscribe(
            () => {
                //Optional: Handle success or perform any additional actions
                alert('Content saved successfully');
            }, (error) => {
                // Optional: Handle error
                alert('Error saving content:' + error.message);
            }
        )
    }

}
