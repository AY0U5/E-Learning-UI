import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ContactDto extends BaseDto{

    public name: string;

    public email: string;

    public phone: string;

    public setFrom: string;

   public dateContact: Date;

   public replied: null | boolean;

    public message: string;

    

    constructor() {
        super();

        this.name = '';
        this.email = '';
        this.phone = '';
        this.setFrom = '';
        this.dateContact = null;
        this.replied = null;
        this.message = '';

        }

}
