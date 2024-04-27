import {Component, OnInit} from '@angular/core';
import {DictionaryAdminService} from 'src/app/shared/service/admin/inscription/DictionaryAdmin.service';
import {DictionaryDto} from 'src/app/shared/model/inscription/Dictionary.model';
import {DictionaryCriteria} from 'src/app/shared/criteria/inscription/DictionaryCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';


@Component({
  selector: 'app-dictionary-list-admin',
  templateUrl: './dictionary-list-admin.component.html'
})
export class DictionaryListAdminComponent extends AbstractListController<DictionaryDto, DictionaryCriteria, DictionaryAdminService>  implements OnInit {

    override fileName = 'Dictionary';


    etudiants: Array<EtudiantDto>;


    constructor( private dictionaryService: DictionaryAdminService  , private etudiantService: EtudiantAdminService) {
        super(dictionaryService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Dictionary').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'word', header: 'Word'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Word': e.word ,
                 'Definition': e.definition ,
                'Etudiant': e.etudiant?.ref ,
            }
        });

        this.criteriaData = [{
            'Word': this.criteria.word ? this.criteria.word : environment.emptyForExport ,
            'Definition': this.criteria.definition ? this.criteria.definition : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        }];
      }
}
