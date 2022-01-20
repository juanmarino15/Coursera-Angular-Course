import { Component, OnInit, Input, ViewEncapsulation, OnChanges, 
  SimpleChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked,
   OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name:string, content:string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
//what we put inside te @input is an 'alias'. passing data though a component to a child component

  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(cnt: SimpleChanges) {
    console.log("ng on changes called!");
    console.log(cnt);
  }

  ngOnInit() {
    console.log("ng init called");
    console.log('Text contnetn: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ng after content init called');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked(){
      console.log('ng after content checked called!');

  }

  ngAfterViewInit(){
    console.log('ng after view init called');
    console.log('Text contnetn: ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked(){
      console.log('ng after view checked called!');
  }

  ngOnDestroy(){
      
  }

}
