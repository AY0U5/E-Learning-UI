import { preloadFonts } from '../utils/preloadFonts';
import { gsap } from 'gsap';

interface DOMElements {
    frame: Element | null;
    content: Element | null;
    enterCtrl: Element | null;
    enterBackground: Element | null;
}

export class Intro {
    private DOM: { el: HTMLElement, circleText: SVGTextElement[] };
    private circleTextTotal: number;
    private startTL: gsap.core.Timeline | null = null;
    private enterMouseEnterEv!: () => void;
    private enterMouseLeaveEv!: () => void;
    private enterClickEv!: () => void;
    private domElements: DOMElements;

    constructor(el: HTMLElement, domElements: DOMElements) {
        this.DOM = { el: el, circleText: Array.from(el.querySelectorAll<SVGTextElement>('text.circles__text')) };
        this.circleTextTotal = this.DOM.circleText.length;
        this.domElements = domElements;
        this.setup();
    }

    private setup(): void {
        gsap.set(this.DOM.circleText, { transformOrigin: '50% 50%' });
        gsap.set([this.DOM.circleText, this.domElements.content?.children, this.domElements.frame?.children], { opacity: 0 });
        gsap.set(this.domElements.enterCtrl, { pointerEvents: 'none' });

        this.initEvents();
    }

    private initEvents(): void {
        this.enterMouseEnterEv = () => {
            gsap.killTweensOf([this.domElements.enterBackground, this.DOM.circleText]);

            gsap.to(this.domElements.enterBackground, {
                duration: 0.8,
                ease: 'power4',
                scale: 1.2,
                opacity: 1
            });

            gsap.to(this.DOM.circleText, {
                duration: 4,
                ease: 'power4',
                rotate: '+=180',
                stagger: {
                    amount: -0.3
                }
            });
        };

        this.enterMouseLeaveEv = () => {
            gsap.to(this.domElements.enterBackground, {
                duration: 0.8,
                ease: 'power4',
                scale: 1
            });
        };

        this.enterClickEv = () => this.enter();

        this.domElements.enterCtrl?.addEventListener('mouseenter', this.enterMouseEnterEv);
        this.domElements.enterCtrl?.addEventListener('mouseleave', this.enterMouseLeaveEv);
        this.domElements.enterCtrl?.addEventListener('click', this.enterClickEv);
    }

    public start(): void {
        this.startTL = gsap.timeline()
            .addLabel('start', 0)
            .to([this.DOM.circleText, this.domElements.enterCtrl], {
                duration: 2.5,
                ease: 'expo',
                startAt: { opacity: 0, scale: 0.3 },
                scale: 1,
                opacity: 1,
                stagger: {
                    amount: 0.5
                }
            }, 'start')
            .add(() => gsap.set(this.domElements.enterCtrl, { pointerEvents: 'auto' }), 'start+=1');
    }

    private enter(): void {
        this.startTL?.kill();
        this.domElements.enterCtrl?.removeEventListener('mouseenter', this.enterMouseEnterEv);
        this.domElements.enterCtrl?.removeEventListener('mouseleave', this.enterMouseLeaveEv);
        this.domElements.enterCtrl?.removeEventListener('click', this.enterClickEv);
        gsap.set(this.domElements.enterCtrl, { pointerEvents: 'none' });
        gsap.set([this.domElements.frame, this.domElements.content], { opacity: 1 });

        gsap.timeline()
            .addLabel('start', 0)
            .to(this.domElements.enterCtrl, {
                duration: 1.5,
                ease: 'expo.inOut',
                scale: 0.7,
                opacity: 0
            }, 'start')
            .to(this.DOM.circleText, {
                duration: 1.5,
                ease: 'expo.inOut',
                scale: (i: number) => 1.5 + (this.circleTextTotal - i) * 0.3,
                opacity: 0,
                stagger: {
                    amount: 0.2
                }
            }, 'start')
            .to([this.domElements.content?.children, this.domElements.frame?.children], {
                duration: 1,
                ease: 'power3.out',
                startAt: { opacity: 0, scale: 0.9 },
                scale: 1,
                opacity: 1,
                stagger: {
                    amount: 0.3
                }
            }, 'start+=1.1');
    }
}
