import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class WorkloadBonusDto extends BaseDto{

    public code: string;

    public nombreSession: null | number;

    public prix: null | number;

    

    constructor() {
        super();

        this.code = '';
        this.nombreSession = null;
        this.prix = null;

        }

}
