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
export class ProfileComponent implements OnInit{

    public curUser : UserDto;




    constructor(private tokenService:TokenService,private authService:AuthService ,private userService:UserService) {
    }

    public get itemuser(): UserDto {

        return this.userService.item;
    }

    public set itemuser(value: UserDto) {
        this.userService.item = value;
    }
    ngOnInit(): void {
        this.finduser(); // Appel de la fonction finduser lors de l'initialisation du composant
    }

    public async finduser(){
        this.userService.findByUsername(this.authenticatedUser.username).subscribe(
            res => {
                this.curUser = res;
                console.log(this.curUser); // Ceci est maintenant à l'intérieur du callback et sera exécuté après que `this.curUser` soit initialisé
            },
            error => {
                console.error('Error fetching user', error); // Toujours utile de gérer les erreurs
            }
        );
    }


    /*public async finduser(dto: UserDto) {
            this.userService.findByUsername(dto.username).subscribe(res => {
                this.curUser = res;

                console.log(this.curUser);
            });

    }*/

    public showuser() : String {
       // this.tokenService.token();
       // console.log(this.tokenService.token())
        console.log(this.authenticatedUser) ;
       return localStorage.getItem('username')
}
    get authenticatedUser(): UserDto {
        return this.authService.authenticatedUser;
    }

    set authenticatedUser(value: UserDto) {
        this.authService.authenticatedUser = value;
    }
}
