import { Component, NgModule, Input, OnInit} from '@angular/core';
import { Chirp } from './components/chirp';
import {ChirpService} from './components/chirp.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChirpService]
})
export class AppComponent implements OnInit {
  title = 'Chirper';
  chirps: Chirp[];
  selectedChirp: Chirp;
  
  constructor(private chirpService: ChirpService){ }
  
  getChirps(): void {
    this.chirpService.getChirps().then(chirps => this.chirps = chirps);
  }
  
  ngOnInit():void{
   this.getChirps();
  }

  onSelect(chirp: Chirp):void{
    this.selectedChirp = chirp;
  }
}

//list must have a chirp array or have acess to a chirp array
  //the chirps should be in an unordered list
  //the unordered list shoud use ngfor to print all of the chirps onto the screen.
  //the list will have a mat-card on it with rounded edges so that it will look like a real tweet.

//Chirper shoul be a form with an input that will allow me to unshift the chirps into the chirp array
//single page will display one single chirp by itself 