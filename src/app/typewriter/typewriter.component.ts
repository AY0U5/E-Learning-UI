import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-typewriter',
    templateUrl: './typewriter.component.html',
    styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
    texts: string[] = [
        'Hello, this is your learning world',
        'practice , make you perfect!'
    ];
    displayedText: string = '';
    typingSpeed: number = 100; // Adjust typing speed here (milliseconds)
    delayBetweenTexts: number = 1000; // Delay before starting the second text (milliseconds)
    fadeDuration: number = 500; // Duration of the fade out effect (milliseconds)

    ngOnInit() {
        this.startTypingLoop();
    }

    async startTypingLoop() {
        while (true) {
            for (let text of this.texts) {
                await this.typeText(text);
                await this.delay(this.delayBetweenTexts);
                await this.fadeOutText();
            }
        }
    }

    typeText(text: string) {
        return new Promise<void>((resolve) => {
            let currentIndex = 0;
            const typeInterval = setInterval(() => {
                this.displayedText += text[currentIndex];
                currentIndex++;
                if (currentIndex === text.length) {
                    clearInterval(typeInterval);
                    resolve();
                }
            }, this.typingSpeed);
        });
    }

    fadeOutText() {
        return new Promise<void>((resolve) => {
            const fadeEffect = setInterval(() => {
                if (!this.displayedText) {
                    clearInterval(fadeEffect);
                    resolve();
                } else {
                    this.displayedText = this.displayedText.slice(0, -1);
                }
            }, this.fadeDuration / this.displayedText.length);
        });
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
