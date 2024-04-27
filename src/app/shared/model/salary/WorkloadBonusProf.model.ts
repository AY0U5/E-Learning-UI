import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SalaryDto} from './Salary.model';
import {WorkloadBonusDto} from './WorkloadBonus.model';
import {ProfDto} from '../prof/Prof.model';

export class WorkloadBonusProfDto extends BaseDto{

    public mois: null | number;

    public annee: null | number;

    public workloadBonus: WorkloadBonusDto ;
    public prof: ProfDto ;
    public salary: SalaryDto ;
    

    constructor() {
        super();

        this.mois = null;
        this.annee = null;
        this.workloadBonus = new WorkloadBonusDto() ;
        this.prof = new ProfDto() ;

        }

}
