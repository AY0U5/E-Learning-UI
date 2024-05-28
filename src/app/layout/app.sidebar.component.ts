import {Component, ElementRef, OnInit} from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {UserDto} from "../zynerator/security/shared/model/User.model";
import {UserService} from "../zynerator/security/shared/service/User.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent implements OnInit {
    collapsed: boolean = false;
    model: any[];
    modelAdmin: any[];
    editDialog = false ;
    constructor(public layoutService: LayoutService,
                public el: ElementRef,
                private authService: AuthService,
                private roleService: RoleService,
                private userService: UserService) { }

    ngOnInit() {
        this.hideSide()
        this.modelAdmin =
            [
                {
                    label: 'Page',
                    icon: 'pi pi-home',
                    routerLink: ['/app/admin/page'],
                },
                {
                    label: 'create',
                    icon: 'pi pi-folder',
                    routerLink: ['/app/admin/tables'],
                },
                {
                    label: 'fill in',
                    icon: 'pi pi-pencil',
                    routerLink: ['/app/admin/course/section/remplir'],
                },
                {
                    label: 'quiz',
                    icon: 'pi pi-shield',
                    routerLink: ['/app/admin/quiz/quiz/list'],
                },
                {
                    label: 'List User',
                    icon: 'pi pi-user',
                    routerLink: ['/app/admin/security/user/list']
                },
                {
                    label: 'Liste prof',
                    icon: 'pi pi-fw pi-plus-circle',
                    routerLink: ['/app/admin/prof/prof/list']
                },
                {
                    label: 'Liste etudiant',
                    icon: 'pi pi-fw pi-plus-circle',
                    routerLink: ['/app/admin/inscription/etudiant/list']
                }
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

    public async edit(dto: UserDto) {
        this.userService.findByUsername(dto.username).subscribe(res => {
            this.item = res;
            this.editDialog = true;
            console.log(this.item);
        });

    }
    get item(): UserDto {
        return this.userService.item;
    }

    set item(value: UserDto) {
        this.userService.item = value;
    }
    get authenticatedUser(): UserDto{
        return this.authService.authenticatedUser;
    }
    set authenticatedUser(userDto: UserDto){
        this.authService.authenticatedUser = userDto;
    }
    public editUser(){
        this.userService.edit().subscribe(data => this.authenticatedUser = data);
        this.authService.loadInfos();
        this.editDialog = false;
    }

    public hideEditDialog() {
        this.editDialog = false;
    }
}

