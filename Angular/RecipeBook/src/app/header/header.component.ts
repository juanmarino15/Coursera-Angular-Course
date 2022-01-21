import { Component,EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    //@output enables the event to be listened by the parent component
    @Output() featureSelected = new EventEmitter<string>(); //creating a new event emitter type string. the parentesis create an object


    onSelect(feature: string){
        this.featureSelected.emit(feature)
    }
}