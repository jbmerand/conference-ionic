import { Component, OnInit } from '@angular/core';
import {Speaker} from '../entities/speaker';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {

  isErreurRecuperationPresentateurs: boolean;
  presentateursData: Speaker[];
  urlBlogDevFest = 'https://devfest2018.gdgnantes.com/';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.recupererDonneesSpeakers().subscribe(
        (presentateurs => {
          this.isErreurRecuperationPresentateurs = false;
          this.presentateursData = presentateurs;
        }),
        (() => this.isErreurRecuperationPresentateurs = true)
    );
  }

}
