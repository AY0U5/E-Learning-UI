import {Component, OnInit} from '@angular/core';
import {CoursAdminService} from "../../../../shared/service/admin/course/CoursAdmin.service";
import {CoursDto} from "../../../../shared/model/course/Cours.model";
import {ParcoursDto} from "../../../../shared/model/course/Parcours.model";
import {SectionDto} from "../../../../shared/model/course/Section.model";
import {ParcoursAdminService} from "../../../../shared/service/admin/course/ParcoursAdmin.service";
import {SectionAdminService} from "../../../../shared/service/admin/course/SectionAdmin.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
    cours: Array<CoursDto>;
    parcours: Array<ParcoursDto>;
    sections: Array<SectionDto>;

    ngOnInit() {
        this.findAllCours()
        this.findAllParcours()
        this.findAllSections()
    }

    constructor( private coursService: CoursAdminService,
                 private parcService: ParcoursAdminService,
                 private sectionService: SectionAdminService,){

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
}
