import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
   <div [class.isbluebox]="isblue" ></div>
    <div [class.isbluebox]="!isblue"></div>
    <input type="checkbox" [(ngModel)]="isblue" /> `,
    styles: [`
    div {width:50px; height:50px; border:1px solid #ccc}
     .isbluebox{background-color:blue;}
    `]
})
export class ChildComponent {
    isblue = false;
}