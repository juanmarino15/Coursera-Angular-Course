import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector:'[appBasicHighlight]'
})

//example of directive
export class BasichighlighDirective implements OnInit{
    constructor(private elementRef: ElementRef, ){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
