import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextComponent } from 'E:/project_ws/angualar2_trng_ws/eventemitter/src/app/Child-Editor/text-editor.component';
import { ClickToRevealDirective } from 'E:/project_ws/angualar2_trng_ws/eventemitter/src/app/directive/click-to-reveal directive';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ClickToRevealDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
