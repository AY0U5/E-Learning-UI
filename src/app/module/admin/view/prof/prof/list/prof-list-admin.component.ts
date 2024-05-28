import {Component, OnInit} from '@angular/core';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfCriteria} from 'src/app/shared/criteria/prof/ProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {EtudiantClassRoomDto} from 'src/app/shared/model/inscriptionref/EtudiantClassRoom.model';
import {EtudiantClassRoomAdminService} from 'src/app/shared/service/admin/inscriptionref/EtudiantClassRoomAdmin.service';
import {TypeTeacherDto} from 'src/app/shared/model/prof/TypeTeacher.model';
import {TypeTeacherAdminService} from 'src/app/shared/service/admin/prof/TypeTeacherAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {RecommendTeacherDto} from 'src/app/shared/model/recomrecla/RecommendTeacher.model';
import {RecommendTeacherAdminService} from 'src/app/shared/service/admin/recomrecla/RecommendTeacherAdmin.service';
import {CategorieProfDto} from 'src/app/shared/model/prof/CategorieProf.model';
import {CategorieProfAdminService} from 'src/app/shared/service/admin/prof/CategorieProfAdmin.service';
import {QuizClassRoomDto} from 'src/app/shared/model/quiz/QuizClassRoom.model';
import {QuizClassRoomAdminService} from 'src/app/shared/service/admin/quiz/QuizClassRoomAdmin.service';
import {TrancheHoraireProfDto} from 'src/app/shared/model/prof/TrancheHoraireProf.model';
import {TrancheHoraireProfAdminService} from 'src/app/shared/service/admin/prof/TrancheHoraireProfAdmin.service';
import {ClassRoomDto} from 'src/app/shared/model/classroom/ClassRoom.model';
import {ClassRoomAdminService} from 'src/app/shared/service/admin/classroom/ClassRoomAdmin.service';


@Component({
  selector: 'app-prof-list-admin',
  templateUrl: './prof-list-admin.component.html',
  styleUrls:['./prof-list-admin.component.css']
})
export class ProfListAdminComponent extends AbstractListController<ProfDto, ProfCriteria, ProfAdminService>  implements OnInit {

    override fileName = 'Prof';


     yesOrNoCredentialsNonExpired: any[] = [];
     yesOrNoEnabled: any[] = [];
     yesOrNoAccountNonExpired: any[] = [];
     yesOrNoAccountNonLocked: any[] = [];
     yesOrNoPasswordChanged: any[] = [];
    parcourss: Array<ParcoursDto>;
    categorieProfs: Array<CategorieProfDto>;
    typeTeachers: Array<TypeTeacherDto>;


    constructor( private profService: ProfAdminService  , private parcoursService: ParcoursAdminService, private quizService: QuizAdminService, private typeTeacherService: TypeTeacherAdminService, private etudiantService: EtudiantAdminService, private recommendTeacherService: RecommendTeacherAdminService, private categorieProfService: CategorieProfAdminService, private trancheHoraireProfService: TrancheHoraireProfAdminService, private classRoomService: ClassRoomAdminService) {
        super(profService);
    }

    filteredItems: ProfDto[] = [];
    data: ProfDto[] = [];


    filterGlobal(searchTerm: string) {
        if (!searchTerm) {
            this.filteredItems = [...this.items];
            return;
        }

        searchTerm = searchTerm.toLowerCase();

        this.filteredItems = this.items.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm)
            )
        );
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Prof').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadParcours();
                this.loadCategorieProf();
                this.loadTypeTeacher();
                this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
        console.log(this.items);
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'about', header: 'About'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'categorieProf?.code', header: 'Categorie prof'},
            {field: 'typeTeacher?.libelle', header: 'Type teacher'},
            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
            {field: 'enabled', header: 'Enabled'},
            {field: 'accountNonExpired', header: 'Account non expired'},
            {field: 'accountNonLocked', header: 'Account non locked'},
            {field: 'passwordChanged', header: 'Password changed'},
            {field: 'username', header: 'Username'},
            {field: 'password', header: 'Password'},
        ];
    }


    public async loadParcours(){
       this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss, error => console.log(error))
    }
    public async loadCategorieProf(){
       this.categorieProfService.findAllOptimized().subscribe(categorieProfs => this.categorieProfs = categorieProfs, error => console.log(error))
    }
    public async loadTypeTeacher(){
       this.typeTeacherService.findAllOptimized().subscribe(typeTeachers => this.typeTeachers = typeTeachers, error => console.log(error))
    }

	public override initDuplicate(res: ProfDto) {
        if (res.trancheHoraireProfs != null) {
             res.trancheHoraireProfs.forEach(d => { d.prof = null; d.id = null; });
        }
        if (res.classRooms != null) {
             res.classRooms.forEach(d => { d.prof = null; d.id = null; });
        }
        if (res.recommendTeachers != null) {
             res.recommendTeachers.forEach(d => { d.prof = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'About': e.about ,
                'Parcours': e.parcours?.libelle ,
                'Categorie prof': e.categorieProf?.code ,
                'Type teacher': e.typeTeacher?.libelle ,
                'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                 'Username': e.username ,
                 'Password': e.password ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'About': this.criteria.about ? this.criteria.about : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        //'Categorie prof': this.criteria.categorieProf?.code ? this.criteria.categorieProf?.code : environment.emptyForExport ,
        //'Type teacher': this.criteria.typeTeacher?.libelle ? this.criteria.typeTeacher?.libelle : environment.emptyForExport ,
            'Credentials non expired': this.criteria.credentialsNonExpired ? (this.criteria.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.criteria.enabled ? (this.criteria.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.criteria.accountNonExpired ? (this.criteria.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.criteria.accountNonLocked ? (this.criteria.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.criteria.passwordChanged ? (this.criteria.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Username': this.criteria.username ? this.criteria.username : environment.emptyForExport ,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport ,
        }];
      }

    afficheprof(item: ProfDto) {
        console.log(item)
    }
}
