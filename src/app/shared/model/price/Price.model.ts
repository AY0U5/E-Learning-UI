import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PriceDto extends BaseDto{

    public price: null | number;

    public oldPrice: null | number;

    public lib: string;

    public nreCourse: null | number;

    public nreHours: null | number;

    public nreMonth: null | number;

   public forGroup: null | boolean;

    

    constructor() {
        super();

        this.price = null;
        this.oldPrice = null;
        this.lib = '';
        this.nreCourse = null;
        this.nreHours = null;
        this.nreMonth = null;
        this.forGroup = null;

        }

}
