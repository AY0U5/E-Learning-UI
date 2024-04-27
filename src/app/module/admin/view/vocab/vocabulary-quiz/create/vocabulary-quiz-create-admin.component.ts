import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {VocabularyQuizAdminService} from 'src/app/shared/service/admin/vocab/VocabularyQuizAdmin.service';
import {VocabularyQuizDto} from 'src/app/shared/model/vocab/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/shared/criteria/vocab/VocabularyQuizCriteria.model';
import {VocabularyDto} from 'src/app/shared/model/vocab/Vocabulary.model';
import {VocabularyAdminService} from 'src/app/shared/service/admin/vocab/VocabularyAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
@Component({
  selector: 'app-vocabulary-quiz-create-admin',
  templateUrl: './vocabulary-quiz-create-admin.component.html'
})
export class VocabularyQuizCreateAdminComponent extends AbstractCreateController<VocabularyQuizDto, VocabularyQuizCriteria, VocabularyQuizAdminService>  implements OnInit {

    private _vocabularysElement = new VocabularyDto();


   private _validVocabularyQuizLibelle = true;
    private _validSectionCode = true;

    constructor( private vocabularyQuizService: VocabularyQuizAdminService , private vocabularyService: VocabularyAdminService, private sectionService: SectionAdminService) {
        super(vocabularyQuizService);
    }

    ngOnInit(): void {
        this.vocabularysElement.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
        this.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
    }



    validateVocabularys(){
        this.errorMessages = new Array();
    }


    public override setValidation(value: boolean){
        this.validVocabularyQuizLibelle = value;
    }

    public addVocabularys() {
        if( this.item.vocabularys == null )
            this.item.vocabularys = new Array<VocabularyDto>();
       this.validateVocabularys();
       if (this.errorMessages.length === 0) {
              this.item.vocabularys.push({... this.vocabularysElement});
              this.vocabularysElement = new VocabularyDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletevocabularys(p: VocabularyDto) {
        this.item.vocabularys.forEach((element, index) => {
            if (element === p) { this.item.vocabularys.splice(index, 1); }
        });
    }

    public editvocabularys(p: VocabularyDto) {
        this.vocabularysElement = {... p};
        this.activeTab = 0;
    }


    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateVocabularyQuizLibelle();
    }

    public validateVocabularyQuizLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validVocabularyQuizLibelle = false;
        } else {
            this.validVocabularyQuizLibelle = true;
        }
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



    get validVocabularyQuizLibelle(): boolean {
        return this._validVocabularyQuizLibelle;
    }

    set validVocabularyQuizLibelle(value: boolean) {
         this._validVocabularyQuizLibelle = value;
    }

    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }

    get vocabularysElement(): VocabularyDto {
        if( this._vocabularysElement == null )
            this._vocabularysElement = new VocabularyDto();
        return this._vocabularysElement;
    }

    set vocabularysElement(value: VocabularyDto) {
        this._vocabularysElement = value;
    }

}
