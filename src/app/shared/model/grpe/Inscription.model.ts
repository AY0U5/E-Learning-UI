import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursDto} from '../course/Parcours.model';
import {QuizDto} from '../quiz/Quiz.model';
import {SkillDto} from '../inscriptionref/Skill.model';
import {InteretEtudiantDto} from '../inscriptionref/InteretEtudiant.model';
import {FonctionDto} from '../inscriptionref/Fonction.model';
import {EtudiantDto} from '../inscription/Etudiant.model';
import {EtatInscriptionDto} from '../inscriptionref/EtatInscription.model';
import {GroupeTypeDto} from './GroupeType.model';
import {StatutSocialDto} from '../inscriptionref/StatutSocial.model';
import {PackStudentDto} from '../pack/PackStudent.model';
import {GroupeEtudeDto} from './GroupeEtude.model';
import {NiveauEtudeDto} from '../inscriptionref/NiveauEtude.model';

export class InscriptionDto extends BaseDto{

    public numeroInscription: null | number;

    public noteQuizNiveau: null | number;

   public quizFinished: null | boolean;

    public dateRegistration: string;

   public datedebutinscription: Date;

   public datefininscription: Date;

    public skype: string;

    public etudiant: EtudiantDto ;
    public etatInscription: EtatInscriptionDto ;
    public parcours: ParcoursDto ;
    public groupeEtude: GroupeEtudeDto ;
    public groupeType: GroupeTypeDto ;
    public statutSocial: StatutSocialDto ;
    public interetEtudiant: InteretEtudiantDto ;
    public niveauEtude: NiveauEtudeDto ;
    public fonction: FonctionDto ;
    public quiz: QuizDto ;
    public packStudent: PackStudentDto ;
    public skill: SkillDto ;
    

    constructor() {
        super();

        this.numeroInscription = null;
        this.noteQuizNiveau = null;
        this.quizFinished = null;
        this.dateRegistration = '';
        this.datedebutinscription = null;
        this.datefininscription = null;
        this.skype = '';
        this.etudiant = new EtudiantDto() ;
        this.etatInscription = new EtatInscriptionDto() ;
        this.groupeEtude = new GroupeEtudeDto() ;
        this.groupeType = new GroupeTypeDto() ;
        this.statutSocial = new StatutSocialDto() ;
        this.niveauEtude = new NiveauEtudeDto() ;
        this.fonction = new FonctionDto() ;
        this.quiz = new QuizDto() ;
        this.packStudent = new PackStudentDto() ;
        this.skill = new SkillDto() ;

        }

}
