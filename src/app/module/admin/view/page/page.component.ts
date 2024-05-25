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

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
    cours: Array<CoursDto>;
    parcours: Array<ParcoursDto>;
    sections: Array<SectionDto>;
    profs: Array<ProfDto>;
    students: Array<EtudiantDto>;
    admins: Array<UserDto>;

    ngOnInit() {
        this.findAllCours()
        this.findAllParcours()
        this.findAllSections()
    }

    constructor( private coursService: CoursAdminService,
                 private parcService: ParcoursAdminService,
                 private sectionService: SectionAdminService,
                 private profService: ProfAdminService, 
                 private studentService: EtudiantAdminService,
                 private adminService: UserService){

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
    public findAllAdmin(){
        return this.adminService.findAll().subscribe(data => this.admins = data)
    }
}
