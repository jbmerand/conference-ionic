import { Component, OnInit } from '@angular/core';
import {Speaker} from '../entities/speaker';
import {DataService} from '../services/data.service';

/**
 * Composant gérant la page d'affichage de la liste des présentateurs.
 */
@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styles: [],
})
export class SpeakersPage implements OnInit {

  isErreurRecuperationPresentateurs: boolean;
  presentateursData: Speaker[];
  urlBlogDevFest = 'https://devfest2018.gdgnantes.com/';

    /**
     * Constructeur
     * @param dataService : DataService
     */
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.recupererDonneesSpeakers().subscribe(
        (presentateurs => {
          this.isErreurRecuperationPresentateurs = false;
          this.presentateursData = presentateurs;
        }),
        (() => this.isErreurRecuperationPresentateurs = true)
    );
  }

}
