import { Component, OnInit } from '@angular/core';
import {Speaker} from '../entities/speaker';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {

  isErreurRecuperationPresentateurs: boolean;
  presentateursData: Speaker[];

  constructor() { }

  ngOnInit() {
  }

}
