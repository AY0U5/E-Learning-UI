import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SalaryDto} from '../salary/Salary.model';
import {ProfDto} from './Prof.model';

export class ClassAverageBonusProfDto extends BaseDto{

    public mois: null | number;

    public annee: null | number;

    public prof: ProfDto ;
    public salary: SalaryDto ;
    

    constructor() {
        super();

        this.mois = null;
        this.annee = null;

        }

}
