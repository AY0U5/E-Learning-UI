import {Component, OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import {ScheduleProfAdminService} from 'src/app/shared/service/admin/prof/ScheduleProfAdmin.service';
import {ScheduleProfDto} from 'src/app/shared/model/prof/ScheduleProf.model';
import {ScheduleProfCriteria} from 'src/app/shared/criteria/prof/ScheduleProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';

import {CalendarOptions, EventClickArg} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FullCalendarComponent} from '@fullcalendar/angular';
import {ScheduleDto} from 'src/app/zynerator/dto/ScheduleDto.model';

@Component({
  selector: 'app-schedule-prof-list-admin',
  templateUrl: './schedule-prof-list-admin.component.html'
})
export class ScheduleProfListAdminComponent extends AbstractListController<ScheduleProfDto, ScheduleProfCriteria, ScheduleProfAdminService>  implements OnInit {

    override fileName = 'ScheduleProf';


    groupeEtudiants: Array<GroupeEtudiantDto>;
    profs: Array<ProfDto>;
    courss: Array<CoursDto>;
    schedules: ScheduleDto[];
    schedule = new ScheduleDto();

    public events: Array<any> = new Array<any>();

    @ViewChild('calendar') calendarComponent: FullCalendarComponent;
    showEditDialogContent = false ;
    createDialogVisible = false;
    calendarOptions: CalendarOptions = {
        plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
        headerToolbar: {
            left: 'prev,today,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        slotLabelFormat: {
            hour: '2-digit',
            minute: '2-digit',
            omitZeroMinute: false,
            hour12: false,
        },
        initialView: 'timeGridWeek',
        weekends: true,
        editable: true, // Enable event dragging
        eventResizableFromStart: true, // Enable resizing from the start
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        datesSet: (info) => {
            const start = info.start;
            const end = info.end;
            this.handleDateSet(start, end);
        },
        eventClick: this.handleEventClick.bind(this),
        dateClick: this.handleDateClick.bind(this),
    };



    constructor( private scheduleProfService: ScheduleProfAdminService  , private changeDetectorRef: ChangeDetectorRef  , private groupeEtudiantService: GroupeEtudiantAdminService, private coursService: CoursAdminService, private profService: ProfAdminService) {
        super(scheduleProfService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ScheduleProf').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadGroupeEtudiant();
                this.loadProf();
                this.loadCours();
            }
        });
    }


  update() {
        this.service.edit().subscribe(data => {
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = data;
            this.editDialog = false;
            this.item = this.service.constrcutDto();
            const event = {
                title: data.subject,
                start: new Date(data.startTime),
                end: new Date(data.endTime)
            };
            this.calendarComponent.getApi().addEvent(event);
            this.calendarComponent.getApi().refetchEvents(); // Refresh the calendar
            this.changeDetectorRef.markForCheck();
        } , error => {
            console.log(error);
        });
  }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.item = this.service.constrcutDto();
                const event = {
                    title: item.subject,
                    start: new Date(item.startTime),
                    end: new Date(item.endTime)
                };
                this.calendarComponent.getApi().addEvent(event);
                this.calendarComponent.getApi().refetchEvents(); // Refresh the calendar
                this.changeDetectorRef.markForCheck();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }
        }, error => {
            console.log(error);
        });
    }

// add

  private handleDateSet(start: Date, end: Date) {
        const startDate = new Date(start).toISOString().replace('Z', '');
        const endDate = new Date(end).toISOString().replace('Z', '');
        this.service.findSchedule(startDate, endDate)
            .subscribe(response => {
                this.schedules = response;
                this.updateFullCalendarEvents();
            });
        console.log('schedules', this.schedules);
    }
    updateFullCalendarEvents(viewType: string = 'timeGridWeek'): void {
        this.calendarOptions.initialView = viewType;
        this.events = this.schedules.map((item) => ({
            id: item.id,
            title: item.subject,
            start: new Date(item.startTime),
            end: new Date(item.endTime),
        }));
        this.calendarOptions.events = this.events;
        this.calendarComponent.getApi().refetchEvents();
    }

    handleDateClick(info: any) {
        const clickedDate = info.date;
        this.item.startTime = new Date(clickedDate);
        this.item.endTime = new Date(this.item.startTime.getTime() + 60 * 60 * 1000);
        this.createDialog = true;
        this.createDialogVisible = true;
        this.calendarComponent.getApi().refetchEvents();
        this.changeDetectorRef.markForCheck();
    }

    handleEventClick(clickInfo: EventClickArg) {
        const eventTitle = clickInfo.event.title;
        const clickedDate = clickInfo.event.start;
        const itemIndex = this.schedules.findIndex(item => item.subject === eventTitle);
        if (itemIndex !== -1) {
            this.item.id = Number(clickInfo.event.id);
            this.item.subject = clickInfo.event.title;
            this.item.startTime = new Date(clickedDate);
            this.item.endTime = new Date(this.item.startTime.getTime() + 60 * 60 * 1000);
            this.showEditDialogContent = true;
            this.editDialog = true;
        }
        this.calendarComponent.getApi().refetchEvents();
        this.changeDetectorRef.markForCheck();
    }

    public prepareEdit() {
        this.item.startTime = this.service.format(this.item.startTime);
        this.item.endTime = this.service.format(this.item.endTime);
    }




    public override  initCol() {
        this.cols = [
            {field: 'subject', header: 'Subject'},
            {field: 'startTime', header: 'Start time'},
            {field: 'endTime', header: 'End time'},
            {field: 'ref', header: 'Ref'},
            {field: 'groupeEtudiant?.id', header: 'Groupe etudiant'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'grpName', header: 'Grp name'},
            {field: 'profName', header: 'Prof name'},
            {field: 'profsId', header: 'Profs id'},
        ];
    }


    public async loadGroupeEtudiant(){
       this.groupeEtudiantService.findAll().subscribe(groupeEtudiants => this.groupeEtudiants = groupeEtudiants, error => console.log(error))
    }
    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadCours(){
       this.coursService.findAllOptimized().subscribe(courss => this.courss = courss, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Subject': e.subject ,
                'Start time': this.datePipe.transform(e.startTime , 'dd/MM/yyyy hh:mm'),
                'End time': this.datePipe.transform(e.endTime , 'dd/MM/yyyy hh:mm'),
                 'Ref': e.ref ,
                'Groupe etudiant': e.groupeEtudiant?.id ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                 'Grp name': e.grpName ,
                 'Prof name': e.profName ,
                 'Profs id': e.profsId ,
            }
        });

        this.criteriaData = [{
            'Subject': this.criteria.subject ? this.criteria.subject : environment.emptyForExport ,
            'Start time Min': this.criteria.startTimeFrom ? this.datePipe.transform(this.criteria.startTimeFrom , this.dateFormat) : environment.emptyForExport ,
            'Start time Max': this.criteria.startTimeTo ? this.datePipe.transform(this.criteria.startTimeTo , this.dateFormat) : environment.emptyForExport ,
            'End time Min': this.criteria.endTimeFrom ? this.datePipe.transform(this.criteria.endTimeFrom , this.dateFormat) : environment.emptyForExport ,
            'End time Max': this.criteria.endTimeTo ? this.datePipe.transform(this.criteria.endTimeTo , this.dateFormat) : environment.emptyForExport ,
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Groupe etudiant': this.criteria.groupeEtudiant?.id ? this.criteria.groupeEtudiant?.id : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
            'Grp name': this.criteria.grpName ? this.criteria.grpName : environment.emptyForExport ,
            'Prof name': this.criteria.profName ? this.criteria.profName : environment.emptyForExport ,
            'Profs id Min': this.criteria.profsIdMin ? this.criteria.profsIdMin : environment.emptyForExport ,
            'Profs id Max': this.criteria.profsIdMax ? this.criteria.profsIdMax : environment.emptyForExport ,
        }];
      }
}
