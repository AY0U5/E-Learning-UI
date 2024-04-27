import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {ParcoursCriteria} from '../course/ParcoursCriteria.model';
import {QuizEtudiantCriteria} from '../quizetudiant/QuizEtudiantCriteria.model';
import {EtatEtudiantScheduleCriteria} from '../inscriptionref/EtatEtudiantScheduleCriteria.model';
import {InteretEtudiantCriteria} from '../inscriptionref/InteretEtudiantCriteria.model';
import {StatutSocialCriteria} from '../inscriptionref/StatutSocialCriteria.model';
import {LangueCriteria} from '../inscriptionref/LangueCriteria.model';
import {GroupeEtudeCriteria} from '../grpe/GroupeEtudeCriteria.model';
import {SkillCriteria} from '../inscriptionref/SkillCriteria.model';
import {FonctionCriteria} from '../inscriptionref/FonctionCriteria.model';
import {GroupeEtudiantDetailCriteria} from '../grpe/GroupeEtudiantDetailCriteria.model';
import {PackStudentCriteria} from '../pack/PackStudentCriteria.model';
import {TeacherLocalityCriteria} from '../inscriptionref/TeacherLocalityCriteria.model';
import {NiveauEtudeCriteria} from '../inscriptionref/NiveauEtudeCriteria.model';

export class EtudiantCriteria  extends BaseCriteria  {

    public ref: string;
    public refLike: string;
    public groupOption: string;
    public groupOptionLike: string;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public username: string;
    public usernameLike: string;
    public password: string;
    public passwordLike: string;
  public teacherLocality: TeacherLocalityCriteria ;
  public teacherLocalitys: Array<TeacherLocalityCriteria> ;
  public etatEtudiantSchedule: EtatEtudiantScheduleCriteria ;
  public etatEtudiantSchedules: Array<EtatEtudiantScheduleCriteria> ;
  public packStudent: PackStudentCriteria ;
  public packStudents: Array<PackStudentCriteria> ;
  public statutSocial: StatutSocialCriteria ;
  public statutSocials: Array<StatutSocialCriteria> ;
  public skill: SkillCriteria ;
  public skills: Array<SkillCriteria> ;
  public fonction: FonctionCriteria ;
  public fonctions: Array<FonctionCriteria> ;
      public quizEtudiants: Array<QuizEtudiantCriteria>;
      public groupeEtudiantDetails: Array<GroupeEtudiantDetailCriteria>;

}
