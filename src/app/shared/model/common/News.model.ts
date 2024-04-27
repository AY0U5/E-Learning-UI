import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class NewsDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public image: string;

    public description: string;

   public dateNews: Date;

   public dateDebut: Date;

   public dateFin: Date;

    public numeroOrdre: null | number;

    public destinataire: string;

    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';
        this.image = '';
        this.description = '';
        this.dateNews = null;
        this.dateDebut = null;
        this.dateFin = null;
        this.numeroOrdre = null;
        this.destinataire = '';

        }

}
