import {Component, OnInit} from '@angular/core';
import {Speaker} from '../../entities/speaker';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Session} from '../../entities/session';

/**
 * Composant gérant la page d'affichage de la description d'un présentateur.
 */
@Component({
    selector: 'app-speaker',
    templateUrl: './speaker.page.html',
    styles: [],
})
export class SpeakerPage implements OnInit {

    isErreurRecuperationPresentateur: boolean;
    isErreurRecuperationSessions: boolean;
    urlBlogDevFest = 'https://devfest2018.gdgnantes.com/';
    presentateurData: Speaker;
    presentateurId: string;
    sessionsData: Session[] = [];

    /**
     * Constructeur
     * @param dataService : DataService
     * @param route : ActivatedRoute
     */
    constructor(private dataService: DataService, private route: ActivatedRoute) {
        this.presentateurId = route.snapshot.paramMap.get('id');
    }

    /**
     * Méthode récupérant toutes les données nécessaires à l'affichage de la page.
     */
    recupererLesDonnees(): void {
        this.dataService.recupererDonneesSpeakers().subscribe(
            (speakers => {
                this.isErreurRecuperationPresentateur = false;
                this.presentateurData = speakers
                    .find(speaker => speaker.id.toString() === this.presentateurId);
                this.dataService.recupererDonneesSessions().subscribe(
                    (sessions => {
                        this.isErreurRecuperationSessions = false;
                        sessions.forEach(session => {
                            if (session.speakers && session.speakers
                                .includes(parseInt(this.presentateurId, 10))) {
                                this.sessionsData.push(session);
                            }
                        });
                    }),
                    (() => this.isErreurRecuperationSessions = true));

            }),
            () => this.isErreurRecuperationPresentateur = true
        );
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const sessionId = params.get('id');
        });
        this.recupererLesDonnees();
    }

}
