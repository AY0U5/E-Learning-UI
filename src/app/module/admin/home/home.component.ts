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
        this.selectText()
        this.scrolPage()
    }

    public selectText(){
        const text1 = document.getElementById("text1") as HTMLElement;
        const text2 = document.getElementById("text2") as HTMLElement;

        text1.addEventListener("animationend", () => {
            console.log("Animation of text1 ended");
            text1.style.display = "none";
            text2.style.display = "block";
            text2.style.animationPlayState = "running";
        });
    }
    public scrolPage(){
        let lastScrollTop = 0;

        document.addEventListener("DOMContentLoaded", () => {
            const text1 = document.getElementById("text1");
            const text2 = document.getElementById("text2");

            window.addEventListener("scroll", () => {
                let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

                if (currentScroll > lastScrollTop){
                    // Scrolling down
                    text1.style.display = "block";
                    text2.style.display = "none";
                } else {
                    // Scrolling up
                    text1.style.display = "none";
                    text2.style.display = "block";
                }

                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
            });
        });
    }
}
