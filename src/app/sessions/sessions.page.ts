import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Session} from '../entities/session';

/**
 * Composant gérant la page affichant la liste des sessions.
 */
@Component({
    selector: 'app-sessions',
    templateUrl: './sessions.page.html',
    styles: [],
})
export class SessionsPage implements OnInit {

    sessionsData: Session[];
    isErreurRecuperationSessions: boolean;

    /**
     * Constructeur
     * @param dataService : DataService
     */
    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.dataService.recupererDonneesSessions().subscribe(
            (sessions => {
                this.isErreurRecuperationSessions = false;
                this.sessionsData = sessions;
            }),
            (() => this.isErreurRecuperationSessions = true)
        );
    }

}
