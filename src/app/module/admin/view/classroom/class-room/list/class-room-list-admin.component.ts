import {Component, OnInit} from '@angular/core';
import {ClassRoomAdminService} from 'src/app/shared/service/admin/classroom/ClassRoomAdmin.service';
import {ClassRoomDto} from 'src/app/shared/model/classroom/ClassRoom.model';
import {ClassRoomCriteria} from 'src/app/shared/criteria/classroom/ClassRoomCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {EtudiantClassRoomDto} from 'src/app/shared/model/inscriptionref/EtudiantClassRoom.model';
import {EtudiantClassRoomAdminService} from 'src/app/shared/service/admin/inscriptionref/EtudiantClassRoomAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {QuizClassRoomDto} from 'src/app/shared/model/quiz/QuizClassRoom.model';
import {QuizClassRoomAdminService} from 'src/app/shared/service/admin/quiz/QuizClassRoomAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-class-room-list-admin',
  templateUrl: './class-room-list-admin.component.html'
})
export class ClassRoomListAdminComponent extends AbstractListController<ClassRoomDto, ClassRoomCriteria, ClassRoomAdminService>  implements OnInit {

    override fileName = 'ClassRoom';


    profs: Array<ProfDto>;


    constructor( private classRoomService: ClassRoomAdminService  , private quizService: QuizAdminService, private etudiantClassRoomService: EtudiantClassRoomAdminService, private etudiantService: EtudiantAdminService, private quizClassRoomService: QuizClassRoomAdminService, private profService: ProfAdminService) {
        super(classRoomService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ClassRoom').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'prof?.ref', header: 'Prof'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }

	public override initDuplicate(res: ClassRoomDto) {
        if (res.etudiantClassRooms != null) {
             res.etudiantClassRooms.forEach(d => { d.classRoom = null; d.id = null; });
        }
        if (res.quizClassRooms != null) {
             res.quizClassRooms.forEach(d => { d.classRoom = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                'Prof': e.prof?.ref ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        }];
      }
}
