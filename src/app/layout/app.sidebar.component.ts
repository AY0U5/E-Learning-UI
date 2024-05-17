import {Component, ElementRef, OnInit} from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {RoleService} from "../zynerator/security/shared/service/Role.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent implements OnInit {
    collapsed: boolean = false;
    model: any[];
    modelAdmin: any[];
    constructor(public layoutService: LayoutService,
                public el: ElementRef,
                private authService: AuthService,
                private roleService: RoleService) { }

    ngOnInit() {
        this.hideSide()
        this.modelAdmin =
            [
                {
                    label: 'Page',
                    icon: 'pi pi-home',
                    routerLink: ['/app/admin/course/'],
                },
                {
                    label: 'create',
                    icon: 'pi pi-folder',
                    routerLink: ['/app/admin/course/cours/list'],
                },
                {
                    label: 'fill in',
                    icon: 'pi pi-pencil',
                    routerLink: ['/app/admin/course/section/list'],
                },
                {
                    label: 'quiz',
                    icon: 'pi pi-shield',
                    routerLink: ['/app/admin/quiz/quiz/list'],
                },
                {
                    label: 'Liste section',
                    icon: 'pi pi-fw pi-plus-circle',
                    routerLink: ['/app/admin/course/section/remplir']
                },
            ]

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
                this.authService.authenticatedUser.roleUsers.forEach(role => {
                    const roleName: string = this.getRole(role.role.authority);
                    this.roleService._role.next(roleName.toUpperCase());
                    eval('this.model = this.model' + this.getRole(role.role.authority));
                })
            }
        }
    }
    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
        if (!word) { return word; }
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    logout(){
        this.authService.logout();
    }

    public hideSide(){
        var toggle = document.getElementById("toggle");
        var container = document.getElementById("container");

        toggle.onclick = function() {
            container.classList.toggle('active');
        };
    }
}

