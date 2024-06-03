import { Component, OnInit } from '@angular/core';
import { CoursDto } from 'src/app/shared/model/course/Cours.model';
import { ParcoursDto } from 'src/app/shared/model/course/Parcours.model';
import { SectionDto } from 'src/app/shared/model/course/Section.model';
import { CoursAdminService } from 'src/app/shared/service/admin/course/CoursAdmin.service';
import { ParcoursAdminService } from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import { SectionAdminService } from 'src/app/shared/service/admin/course/SectionAdmin.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  cours: Array<CoursDto>;
    parcours: Array<ParcoursDto>;
    sections: Array<SectionDto>;

    ngOnInit() {
       /* this.findAllCours()

        this.findAllSections()*/
        this.itemsCours;
        console.log(this.itemsCours)
    }
    set itemsCours(value: Array<CoursDto>) {
        this.coursService.itemsCours = value;
    }
    get itemsCours():  Array<CoursDto> {
        return  this.coursService.itemsCours;
    }

    constructor( private coursService: CoursAdminService,
                 private parcService: ParcoursAdminService,
                 private sectionService: SectionAdminService,){

    }

    /*public findAllCours(){
        return this.coursService.findAll().subscribe(data => this.cours = data);
    }
    public findAllParcours(){
        return this.parcService.findAll().subscribe(data => this.parcours = data);
    }
    public findAllSections(){
        return this.sectionService.findAll().subscribe(data => this.sections = data);
    }*/
}
