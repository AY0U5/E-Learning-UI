import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FreeTrialConfigurationDto extends BaseDto{

   public dateApplicationDebut: Date;

   public dateApplicationFin: Date;

    public nombreStudentMax: null | number;

    public nombreStudentMin: null | number;

    

    constructor() {
        super();

        this.dateApplicationDebut = null;
        this.dateApplicationFin = null;
        this.nombreStudentMax = null;
        this.nombreStudentMin = null;

        }

}
