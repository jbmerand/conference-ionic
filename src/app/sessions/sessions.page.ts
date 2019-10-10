import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Session} from '../entities/session';

@Component({
    selector: 'app-sessions',
    templateUrl: './sessions.page.html',
    styles: [],
})
export class SessionsPage implements OnInit {

    sessionsData: Session[];
    isErreurRecuperationSessions: boolean;

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
