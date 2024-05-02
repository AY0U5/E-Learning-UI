import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursCriteria} from 'src/app/shared/criteria/course/CoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {SectionDto} from "../../../model/course/Section.model";


@Injectable({
  providedIn: 'root'
})
export class CoursAdminService extends AbstractService<CoursDto, CoursCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CoursDto {
        return new CoursDto();
    }

    public constrcutCriteria(): CoursCriteria {
        return new CoursCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/cours/';
    }

    public findByCoursId(coursId: number): Observable<Array<SectionDto>> {
         return this.http.get<Array<SectionDto>>(environment.apiUrlAlcservice + 'admin/cours/section/id' + coursId);
    }


}
