import {Component, OnInit} from '@angular/core';
import {CoursAdminService} from "../../../../shared/service/admin/course/CoursAdmin.service";
import {CoursDto} from "../../../../shared/model/course/Cours.model";
import {ParcoursDto} from "../../../../shared/model/course/Parcours.model";
import {SectionDto} from "../../../../shared/model/course/Section.model";
import {ParcoursAdminService} from "../../../../shared/service/admin/course/ParcoursAdmin.service";
import {SectionAdminService} from "../../../../shared/service/admin/course/SectionAdmin.service";
import { ProfAdminService } from 'src/app/shared/service/admin/prof/ProfAdmin.service';
import { ProfDto } from 'src/app/shared/model/prof/Prof.model';
import { EtudiantAdminService } from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import { EtudiantDto } from 'src/app/shared/model/inscription/Etudiant.model';
import { UserService } from 'src/app/zynerator/security/shared/service/User.service';
import { UserDto } from 'src/app/zynerator/security/shared/model/User.model';
import {AbstractListController} from "../../../../zynerator/controller/AbstractListController";
import {UserCriteria} from "../../../../zynerator/security/shared/criteria/UserCriteria.model";
import { QuizDto } from 'src/app/shared/model/quiz/Quiz.model';
import { QuizAdminService } from 'src/app/shared/service/admin/quiz/QuizAdmin.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent extends AbstractListController<UserDto, UserCriteria, UserService> implements OnInit{
    cours: Array<CoursDto>= [];
    parcours: Array<ParcoursDto>= [];
    sections: Array<SectionDto>= [];
    profs: Array<ProfDto> = [];
    students: Array<EtudiantDto>= [];
    admins: Array<UserDto>= [];
    Quiss: Array<QuizDto> = [];


    ngOnInit() {
     /*   this.findAllCours()
        this.findAllParcours()
        this.findAllSections()
        // this.findAllProf()
        // this.findAllAdmin()
        this.findAllStudent();
        this.findPaginatedByCriteria();

        console.log(this.items);*/
        this.activateSecurityConstraint('User').subscribe(() => {
            if (this.listActionIsValid) {
                this.findPaginatedByCriteria();
                // this.initExport();
                // this.initCol();
            }
        });
        this.findAllProf();
        this.findAllCours();
        this.findAllParcours();
        this.findAllSections();
        this.findAllQuiss();


    }

    constructor( private coursService: CoursAdminService,
                 private parcService: ParcoursAdminService,
                 private sectionService: SectionAdminService,
                 private profService: ProfAdminService,
                 private studentService: EtudiantAdminService,
                 private userservice: UserService,
                 private quisService: QuizAdminService
    ){
        super(userservice);

    }

    public findAllCours(){
        return this.coursService.findAll().subscribe(data => this.cours = data);
    }
    public findAllParcours(){
        return this.parcService.findAll().subscribe(data => this.parcours = data);
    }
    public findAllSections(){
        return this.sectionService.findAll().subscribe(data => this.sections = data);
    }
    public findAllProf(){
        return this.profService.findAll().subscribe(data=> this.profs = data)
    }
    public findAllStudent(){
        return this.studentService.findAll().subscribe(data => this.students = data)
    }
    public findAllQuiss(){
        return this.quisService.findAll().subscribe(data => this.Quiss = data)
    }
    /*public findAllAdmin(){
        return this.userservice.findAll().subscribe(data => this.userservice = data)
    }*/
    /*get items(): Array<UserDto> {
        return this.userservice.items;
    }

    set items(value: Array<UserDto>) {
        this.userservice.items = value;
    }*/
}
