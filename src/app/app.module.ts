import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { SingleComponent } from './components/single/single.component';
import { ChirperComponent } from './components/chirper/chirper.component';
import { Chirp } from './components/chirp';
import {ChirpService} from './components/chirp.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    ChirperComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    Chirp,
    ChirpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
