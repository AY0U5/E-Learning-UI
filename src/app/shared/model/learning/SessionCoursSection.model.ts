import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SessionCoursDto} from './SessionCours.model';
import {SectionDto} from '../course/Section.model';

export class SessionCoursSectionDto extends BaseDto{

    public sessionCours: SessionCoursDto ;
    public section: SectionDto ;
    

    constructor() {
        super();

        this.sessionCours = new SessionCoursDto() ;

        }

}
