import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProfDto} from '../prof/Prof.model';

export class RecommendTeacherDto extends BaseDto{

    public ref: string;

    public nombrevote: null | number;

    public nom: string;

    public prenom: string;

    public commentaire: string;

    public telephone: string;

    public login: string;

   public dateRecommamdation: Date;

    public prof: ProfDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.nombrevote = null;
        this.nom = '';
        this.prenom = '';
        this.commentaire = '';
        this.telephone = '';
        this.login = '';
        this.dateRecommamdation = null;

        }

}
