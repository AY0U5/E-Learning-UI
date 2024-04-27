import {Component, OnInit} from '@angular/core';
import {ReclamationEtudiantAdminService} from 'src/app/shared/service/admin/recomrecla/ReclamationEtudiantAdmin.service';
import {ReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/ReclamationEtudiant.model';
import {ReclamationEtudiantCriteria} from 'src/app/shared/criteria/recomrecla/ReclamationEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {TypeReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantAdminService} from 'src/app/shared/service/admin/recomrecla/TypeReclamationEtudiantAdmin.service';


@Component({
  selector: 'app-reclamation-etudiant-list-admin',
  templateUrl: './reclamation-etudiant-list-admin.component.html'
})
export class ReclamationEtudiantListAdminComponent extends AbstractListController<ReclamationEtudiantDto, ReclamationEtudiantCriteria, ReclamationEtudiantAdminService>  implements OnInit {

    override fileName = 'ReclamationEtudiant';


     yesOrNoTraite: any[] = [];
     yesOrNoPostView: any[] = [];
    typeReclamationEtudiants: Array<TypeReclamationEtudiantDto>;


    constructor( private reclamationEtudiantService: ReclamationEtudiantAdminService  , private typeReclamationEtudiantService: TypeReclamationEtudiantAdminService) {
        super(reclamationEtudiantService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ReclamationEtudiant').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadTypeReclamationEtudiant();
                this.yesOrNoTraite =  [{label: 'Traite', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoPostView =  [{label: 'PostView', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateReclamation', header: 'Date reclamation'},
            {field: 'setFrom', header: 'Set from'},
            {field: 'img', header: 'Img'},
            {field: 'traite', header: 'Traite'},
            {field: 'dateTraitement', header: 'Date traitement'},
            {field: 'dateReponse', header: 'Date reponse'},
            {field: 'postView', header: 'Post view'},
            {field: 'objetReclamationEtudiant', header: 'Objet reclamation etudiant'},
            {field: 'username', header: 'Username'},
            {field: 'typeReclamationEtudiant?.libelle', header: 'Type reclamation etudiant'},
        ];
    }


    public async loadTypeReclamationEtudiant(){
       this.typeReclamationEtudiantService.findAllOptimized().subscribe(typeReclamationEtudiants => this.typeReclamationEtudiants = typeReclamationEtudiants, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date reclamation': this.datePipe.transform(e.dateReclamation , 'dd/MM/yyyy hh:mm'),
                 'Message': e.message ,
                 'Set from': e.setFrom ,
                 'Img': e.img ,
                'Traite': e.traite? 'Vrai' : 'Faux' ,
                'Date traitement': this.datePipe.transform(e.dateTraitement , 'dd/MM/yyyy hh:mm'),
                'Date reponse': this.datePipe.transform(e.dateReponse , 'dd/MM/yyyy hh:mm'),
                'Post view': e.postView? 'Vrai' : 'Faux' ,
                 'Objet reclamation etudiant': e.objetReclamationEtudiant ,
                 'Commentaire traiteur': e.commentaireTraiteur ,
                 'Username': e.username ,
                'Type reclamation etudiant': e.typeReclamationEtudiant?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date reclamation Min': this.criteria.dateReclamationFrom ? this.datePipe.transform(this.criteria.dateReclamationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date reclamation Max': this.criteria.dateReclamationTo ? this.datePipe.transform(this.criteria.dateReclamationTo , this.dateFormat) : environment.emptyForExport ,
            'Message': this.criteria.message ? this.criteria.message : environment.emptyForExport ,
            'Set from': this.criteria.setFrom ? this.criteria.setFrom : environment.emptyForExport ,
            'Img': this.criteria.img ? this.criteria.img : environment.emptyForExport ,
            'Traite': this.criteria.traite ? (this.criteria.traite ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date traitement Min': this.criteria.dateTraitementFrom ? this.datePipe.transform(this.criteria.dateTraitementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date traitement Max': this.criteria.dateTraitementTo ? this.datePipe.transform(this.criteria.dateTraitementTo , this.dateFormat) : environment.emptyForExport ,
            'Date reponse Min': this.criteria.dateReponseFrom ? this.datePipe.transform(this.criteria.dateReponseFrom , this.dateFormat) : environment.emptyForExport ,
            'Date reponse Max': this.criteria.dateReponseTo ? this.datePipe.transform(this.criteria.dateReponseTo , this.dateFormat) : environment.emptyForExport ,
            'Post view': this.criteria.postView ? (this.criteria.postView ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Objet reclamation etudiant': this.criteria.objetReclamationEtudiant ? this.criteria.objetReclamationEtudiant : environment.emptyForExport ,
            'Commentaire traiteur': this.criteria.commentaireTraiteur ? this.criteria.commentaireTraiteur : environment.emptyForExport ,
            'Username': this.criteria.username ? this.criteria.username : environment.emptyForExport ,
        //'Type reclamation etudiant': this.criteria.typeReclamationEtudiant?.libelle ? this.criteria.typeReclamationEtudiant?.libelle : environment.emptyForExport ,
        }];
      }
}
