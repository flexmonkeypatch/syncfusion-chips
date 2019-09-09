import { Component, ViewEncapsulation, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  	@ViewChild('input')
	  input:Input;
    chips:any = [{id:1, text:'Aaaa'}, {id:2, text:'Bbbb'}, {id:3, text:'Cccc'}, {id:4, text:'Dddd'}, ];


    addChip(event: any) {
      console.log(event);
      this.input.nativeElement.text = '';
      //this.chips.push({id:null, text:text});
    }



}
