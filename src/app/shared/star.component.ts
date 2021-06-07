import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
@Component({
selector:'star',
templateUrl:'star.component.html',
styleUrls:['star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() ratingNo : number;
    @Output() notify : EventEmitter<string> = new EventEmitter<string>()
    starWidth : number;

        ngOnChanges(changes: SimpleChanges): void {
            this.starWidth = (this.ratingNo*75)/5
        }

        onClick(){
            this.notify.emit(`The product with ${this.ratingNo} clicked!`)
        }
}