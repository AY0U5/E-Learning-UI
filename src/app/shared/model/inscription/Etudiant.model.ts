import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursDto} from '../course/Parcours.model';
import {QuizEtudiantDto} from '../quizetudiant/QuizEtudiant.model';
import {EtatEtudiantScheduleDto} from '../inscriptionref/EtatEtudiantSchedule.model';
import {InteretEtudiantDto} from '../inscriptionref/InteretEtudiant.model';
import {StatutSocialDto} from '../inscriptionref/StatutSocial.model';
import {LangueDto} from '../inscriptionref/Langue.model';
import {GroupeEtudeDto} from '../grpe/GroupeEtude.model';
import {SkillDto} from '../inscriptionref/Skill.model';
import {FonctionDto} from '../inscriptionref/Fonction.model';
import {GroupeEtudiantDetailDto} from '../grpe/GroupeEtudiantDetail.model';
import {PackStudentDto} from '../pack/PackStudent.model';
import {TeacherLocalityDto} from '../inscriptionref/TeacherLocality.model';
import {NiveauEtudeDto} from '../inscriptionref/NiveauEtude.model';

export class EtudiantDto extends BaseDto{

    public ref: string;

    public groupOption: string;

   public credentialsNonExpired: null | boolean;

   public enabled: null | boolean;

   public accountNonExpired: null | boolean;

   public accountNonLocked: null | boolean;

   public passwordChanged: null | boolean;

    public username: string;

    public password: string;

    public teacherLocality: TeacherLocalityDto ;
    public etatEtudiantSchedule: EtatEtudiantScheduleDto ;
    public parcours: ParcoursDto ;
    public groupeEtude: GroupeEtudeDto ;
    public packStudent: PackStudentDto ;
    public statutSocial: StatutSocialDto ;
    public interetEtudiant: InteretEtudiantDto ;
    public niveauEtude: NiveauEtudeDto ;
    public skill: SkillDto ;
    public fonction: FonctionDto ;
    public langue: LangueDto ;
     public quizEtudiants: Array<QuizEtudiantDto>;
     public groupeEtudiantDetails: Array<GroupeEtudiantDetailDto>;
    

    constructor() {
        super();

        this.ref = '';
        this.groupOption = '';
        this.credentialsNonExpired = null;
        this.enabled = null;
        this.accountNonExpired = null;
        this.accountNonLocked = null;
        this.passwordChanged = null;
        this.username = '';
        this.password = '';
        this.teacherLocality = new TeacherLocalityDto() ;
        this.etatEtudiantSchedule = new EtatEtudiantScheduleDto() ;
        this.packStudent = new PackStudentDto() ;
        this.statutSocial = new StatutSocialDto() ;
        this.skill = new SkillDto() ;
        this.fonction = new FonctionDto() ;
        this.quizEtudiants = new Array<QuizEtudiantDto>();
        this.groupeEtudiantDetails = new Array<GroupeEtudiantDetailDto>();

        }

}
