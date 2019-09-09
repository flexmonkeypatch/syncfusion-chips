import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Default Chips component
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    chips:any = [{id:1, text:'Aaaa'}, {id:2, text:'Bbbb'}, {id:3, text:'Cccc'}, {id:4, text:'Dddd'}, ];


    addChip(text:string) {
      this.chips.push({id:null, text:text});
    }

    submit() {
      
    }

}
