import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProfDto} from '../prof/Prof.model';

export class SalaryDto extends BaseDto{

    public code: string;

    public mois: null | number;

    public annee: null | number;

    public nbrSessionMensuel: null | number;

   public payer: null | boolean;

    public totalPayment: null | number;

    public totalBonusClassAverage: null | number;

    public totalBonusWorkload: null | number;

    public prof: ProfDto ;
    

    constructor() {
        super();

        this.code = '';
        this.mois = null;
        this.annee = null;
        this.nbrSessionMensuel = null;
        this.payer = null;
        this.totalPayment = null;
        this.totalBonusClassAverage = null;
        this.totalBonusWorkload = null;
        this.prof = new ProfDto() ;

        }

}
