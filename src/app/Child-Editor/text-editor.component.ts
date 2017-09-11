import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'text-editor',
    template:`
    <textarea (keyup)="emitWordCount($event)"></textarea>
    ` ,
})
export class TextComponent {
    @Output() countUpdate = new EventEmitter<number>();
    emitWordCount(e:Event) {
        this.countUpdate.emit(
          ((<HTMLTextAreaElement>e.target).value.match(/\S+/g) || []).length);
      }
}