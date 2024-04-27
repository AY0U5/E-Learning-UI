import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TypeReclamationEtudiantDto} from './TypeReclamationEtudiant.model';

export class ReclamationEtudiantDto extends BaseDto{

    public reference: string;

   public dateReclamation: Date;

    public message: string;

    public setFrom: string;

    public img: string;

   public traite: null | boolean;

   public dateTraitement: Date;

   public dateReponse: Date;

   public postView: null | boolean;

    public objetReclamationEtudiant: string;

    public commentaireTraiteur: string;

    public username: string;

    public typeReclamationEtudiant: TypeReclamationEtudiantDto ;
    

    constructor() {
        super();

        this.reference = '';
        this.dateReclamation = null;
        this.message = '';
        this.setFrom = '';
        this.img = '';
        this.traite = null;
        this.dateTraitement = null;
        this.dateReponse = null;
        this.postView = null;
        this.objetReclamationEtudiant = '';
        this.commentaireTraiteur = '';
        this.username = '';
        this.typeReclamationEtudiant = new TypeReclamationEtudiantDto() ;

        }

}
