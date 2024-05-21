import { Component, OnInit } from '@angular/core';
import { preloadFonts } from '../about/utils/preloadFonts';
import { Intro } from '../about/intro/intro';
import { Observer } from 'gsap/Observer';
import { gsap } from 'gsap';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    intro: Intro | null = null;

    ngOnInit(): void {
        // Initialize DOM elements for intro
        const domElements = {
            frame: document.querySelector('.frame'),
            content: document.querySelector('.content'),
            enterCtrl: document.querySelector('.enter'),
            enterBackground: document.querySelector('.enter__bg')
        };

        // Initialize Intro instance
        const circlesElement = document.querySelector<HTMLElement>('.circles');
        if (circlesElement) {
            this.intro = new Intro(circlesElement, domElements);

            // Preload images and fonts
            Promise.all([preloadFonts('kxo3pgz')]).then(() => {
                // Remove loader (loading class)
                document.body.classList.remove('loading');
                // Start intro animation
                this.intro?.start();
            });
        } else {
            console.error('Element with class "circles" not found.');
        }

        document.documentElement.className = "js";

        const supportsCssVars = (): boolean => {
            const style = document.createElement("style");
            style.innerHTML = ":root { --tmp-var: bold; }";
            document.head.appendChild(style);
            const supports = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)"));
            style.parentNode?.removeChild(style);
            return supports;
        };

        if (!supportsCssVars()) {
            alert("Please view this demo in a modern browser that supports CSS Variables.");
        }
    }
}
