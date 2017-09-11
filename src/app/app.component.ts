import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <p>Word count: {{wordCount}}</p>
  <text-editor (countUpdate)="updateWordCount($event)">
  </text-editor>
  <h1 click-to-reveal>{{title}}</h1>
  `,
  styles: [`
  h1 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 300px;
  }
`]
  
})
export class AppComponent {
  
  wordCount:number = 0;

updateWordCount(e:number):void {
  this.wordCount = e;
}
title:string =  `
Maternity Ward Resorts to Rock Paper Scissors Following 
Baby Mixup`;

}
