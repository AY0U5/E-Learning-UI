import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../../../zynerator/security/shared/service/Token.service";
import {UserDto} from "../../../../../zynerator/security/shared/model/User.model";
import {AuthService} from "../../../../../zynerator/security/shared/service/Auth.service";
import {UserService} from "../../../../../zynerator/security/shared/service/User.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public curUser = {
        credentialsNonExpired: null,
        enabled: null,
        email: null,
        accountNonExpired: null,
        firstName: null,
        lastName: null,
        phone: null,
        accountNonLocked: null,
        username: null,
        password: null,
        passwordChanged: null
    };

    constructor(private tokenService: TokenService, private authService: AuthService, private userService: UserService) {}

    public get itemuser(): UserDto {
        return this.userService.item;
    }

    public set itemuser(value: UserDto) {
        this.userService.item = value;
    }

    ngOnInit(): void {
        const storedUser = localStorage.getItem('curUser');
        if (storedUser) {
            this.curUser = JSON.parse(storedUser);
        } else {
            this.finduser(); // Appel de la fonction finduser lors de l'initialisation du composant si curUser n'est pas déjà stocké
        }
    }

    public async finduser() {
        if (!localStorage.getItem('curUser')) {
            this.userService.findByUsername(this.authenticatedUser.username).subscribe(
                res => {
                    this.curUser = res;
                    localStorage.setItem('curUser', JSON.stringify(this.curUser));
                    console.log('curUser set for the first time:', this.curUser);
                },
                error => {
                    console.error('Error fetching user', error);
                }
            );
        }
    }

    public showuser(): String {
        console.log(this.authenticatedUser);
        return localStorage.getItem('username');
    }

    get authenticatedUser(): UserDto {
        return this.authService.authenticatedUser;
    }

    set authenticatedUser(value: UserDto) {
        this.authService.authenticatedUser = value;
    }
}
