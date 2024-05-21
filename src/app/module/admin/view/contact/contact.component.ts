import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    ngOnInit() {
    }

    public sendMail() {
        emailjs.init("OepatgjGH5Q9EWaDC");

        const nameInput = document.querySelector("#name") as HTMLInputElement;
        const emailInput = document.querySelector("#email") as HTMLInputElement;
        const subjectInput = document.querySelector("#subject") as HTMLInputElement;
        const messageInput = document.querySelector("#message") as HTMLInputElement;

        if (nameInput && emailInput && subjectInput && messageInput) {
            const params = {
                name: nameInput.value,
                email: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value
            };

            const serviceId = "service_pwydut3";
            const templateId = "template_92798s4";

            emailjs.send(serviceId, templateId, params)
                .then(
                    res => {
                        alert("Email sent successfully");
                    }
                )
                .catch(err => {
                    console.error("Failed to send email", err);
                    alert("Failed to send email. Please try again later.");
                });
        } else {
            alert("Please fill in all fields.");
        }
    }

    protected readonly emailjs = emailjs;
}
