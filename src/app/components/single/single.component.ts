import { Component, OnInit, Input } from '@angular/core';
import{ Chirp } from '../chirp'


@Component({
  selector: 'single-chirp',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  @Input() chirp: Chirp;

}
