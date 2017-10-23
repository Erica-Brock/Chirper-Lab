import { Component, NgModule, Input } from '@angular/core';
import { Chirp } from './components/chirp';

const CHIRPS: Chirp[] = [
  { name: 'Edy', username: '@Edymuse', message: "I am Edy Muse" },
  { name: 'Kiara', username: '@KiKi', message: "I am KiKi" },
  { name: 'Kirsten', username: '@SassyCat', message: "I am SassyCat" },
  { name: 'Tyffani', username: '@WildChild', message: "I am the Wild Child" },
  { name: 'Brandon', username: '@TheRealJoker', message: "I am the real Joker" },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirper';
  chirps = CHIRPS;
  selectedChirp: Chirp;

  onSelect(chirp:Chirp):void{
    this.selectedChirp= chirp;
  }
}

//list must have a chirp array or have acess to a chirp array
  //the chirps should be in an unordered list
  //the unordered list shoud use ngfor to print all of the chirps onto the screen.
  //the list will have a mat-card on it with rounded edges so that it will look like a real tweet.

//Chirper shoul be a form with an input that will allow me to unshift the chirps into the chirp array
//single page will display one single chirp by itself 