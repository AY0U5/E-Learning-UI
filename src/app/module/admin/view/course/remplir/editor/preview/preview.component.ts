import { Component } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
    createDialog: boolean = false;
    public createOk(){
        this.createDialog = true;
    }
}
