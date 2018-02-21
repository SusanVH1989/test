import {Component} from '@angular/core';
 

@Component({
    selector: 'event-bind',
    template: `
    <div>
        <button (click)="onClic($event)"> submit</button>
       </div> 
    `,
    
})
export class EventBindComponent {
onClic ($event){
console.log("clicked", $event);
}
}