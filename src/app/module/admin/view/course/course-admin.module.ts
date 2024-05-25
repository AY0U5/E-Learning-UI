import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { SectionItemCreateAdminComponent } from './section-item/create/section-item-create-admin.component';
import { SectionItemEditAdminComponent } from './section-item/edit/section-item-edit-admin.component';
import { SectionItemViewAdminComponent } from './section-item/view/section-item-view-admin.component';
import { SectionItemListAdminComponent } from './section-item/list/section-item-list-admin.component';
import { CoursCreateAdminComponent } from './cours/create/cours-create-admin.component';
import { CoursEditAdminComponent } from './cours/edit/cours-edit-admin.component';
import { CoursViewAdminComponent } from './cours/view/cours-view-admin.component';
import { CoursListAdminComponent } from './cours/list/cours-list-admin.component';
import { ParcoursCreateAdminComponent } from './parcours/create/parcours-create-admin.component';
import { ParcoursEditAdminComponent } from './parcours/edit/parcours-edit-admin.component';
import { ParcoursViewAdminComponent } from './parcours/view/parcours-view-admin.component';
import { ParcoursListAdminComponent } from './parcours/list/parcours-list-admin.component';
import { SectionCreateAdminComponent } from './section/create/section-create-admin.component';
import { SectionEditAdminComponent } from './section/edit/section-edit-admin.component';
import { SectionViewAdminComponent } from './section/view/section-view-admin.component';
import { SectionListAdminComponent } from './section/list/section-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';
import {OrderListModule} from "primeng/orderlist";
import {EditorModule} from "primeng/editor";
import {DataViewModule} from "primeng/dataview";
import {TagModule} from "primeng/tag";
import {RatingModule} from "primeng/rating";
import {TimelineModule} from "primeng/timeline";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {SidebarModule} from "primeng/sidebar";
import {ListboxModule} from "primeng/listbox";
import {AccordionModule} from "primeng/accordion";
import { RemplirComponent } from './remplir/remplir.component';
import {StyleClassModule} from "primeng/styleclass";
import {ProfileComponent} from "./profile/profile.component";



@NgModule({
  declarations: [

    SectionItemCreateAdminComponent,
    SectionItemListAdminComponent,
    SectionItemViewAdminComponent,
    SectionItemEditAdminComponent,
    CoursCreateAdminComponent,
    CoursListAdminComponent,
    CoursViewAdminComponent,
    CoursEditAdminComponent,
    ParcoursCreateAdminComponent,
    ParcoursListAdminComponent,
    ParcoursViewAdminComponent,
    ParcoursEditAdminComponent,
    SectionCreateAdminComponent,
    SectionListAdminComponent,
    SectionViewAdminComponent,
    SectionEditAdminComponent,
    RemplirComponent,
      ProfileComponent
  ],
    imports: [
        CommonModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        ConfirmDialogModule,
        DialogModule,
        PasswordModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SplitButtonModule,
        BrowserAnimationsModule,
        DropdownModule,
        TabViewModule,
        InputSwitchModule,
        InputTextareaModule,
        CalendarModule,
        PanelModule,
        MessageModule,
        MessagesModule,
        InputNumberModule,
        BadgeModule,
        MultiSelectModule,
        PaginatorModule,
        TranslateModule,
        FileUploadModule,
        FullCalendarModule,
        CardModule,
        OrderListModule,
        EditorModule,
        DataViewModule,
        TagModule,
        RatingModule,
        TimelineModule,
        ScrollPanelModule,
        SidebarModule,
        ListboxModule,
        AccordionModule,
        StyleClassModule,

    ],
  exports: [
  SectionItemCreateAdminComponent,
  SectionItemListAdminComponent,
  SectionItemViewAdminComponent,
  SectionItemEditAdminComponent,
  CoursCreateAdminComponent,
  CoursListAdminComponent,
  CoursViewAdminComponent,
  CoursEditAdminComponent,
  ParcoursCreateAdminComponent,
  ParcoursListAdminComponent,
  ParcoursViewAdminComponent,
  ParcoursEditAdminComponent,
  SectionCreateAdminComponent,
  SectionListAdminComponent,
  SectionViewAdminComponent,
  SectionEditAdminComponent,
      // ProfileComponent
  ],
})
export class CourseAdminModule { }
