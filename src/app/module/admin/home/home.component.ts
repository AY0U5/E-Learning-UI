import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../zynerator/security/shared/service/User.service";
import {AppTopBarComponent} from "../../../layout/app.topbar.component";
import {AppLayoutComponent} from "../../../layout/app.layout.component";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [
        AppLayoutComponent
    ]
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const heroImage = document.getElementById('hero-image') as HTMLImageElement;
            if (window.scrollY > 0) { // Change 0 to the scroll value you prefer
                navbar.classList.add('scrolled');
                heroImage.src ='https://engflexy.com/wp-content/uploads/2023/12/cropped-eng-100-100-e1702544221888.webp'
            } else {
                heroImage.src ='https://engflexy.com/wp-content/uploads/2024/01/eng-white-e1704742061683.webp'
                navbar.classList.remove('scrolled');
            }
        });
    }
}
