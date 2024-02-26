import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SezioneIntroComponent } from './sezione-intro/sezione-intro.component';
import { SezioneContattiComponent } from './sezione-contatti/sezione-contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    SezioneIntroComponent,
    SezioneContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
