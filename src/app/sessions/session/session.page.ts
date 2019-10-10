import {Component, OnInit} from '@angular/core';
import {Session} from '../../entities/session';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Speaker} from '../../entities/speaker';

@Component({
    selector: 'app-session',
    templateUrl: './session.page.html',
    styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

    sessionId: string;
    sessionData: Session;
    presentateursData: Speaker[] = [];
    urlBlogDevFest = 'https://devfest2018.gdgnantes.com/';
    isErreurRecuperationSession: boolean;
    isErreurRecuperationPresentateurs: boolean;

    constructor(private dataService: DataService, private route: ActivatedRoute) {
        this.sessionId = route.snapshot.paramMap.get('id');
    }

    recupererLesDonnees() {
        this.dataService.recupererDonneesSessions().subscribe(
            (sessions => {
                this.isErreurRecuperationSession = false;
                this.sessionData = sessions.find(session =>
                    session.id.toString() === this.sessionId);
                if (this.sessionData.speakers) {
                    this.sessionData.speakers.forEach(presentateurId =>
                        this.dataService.recupererDonneesSpeakers()
                            .subscribe((speakers => this.presentateursData
                                .push(speakers
                                    .find(speaker => speaker.id.toString() === presentateurId.toString()))),
                            () => this.isErreurRecuperationPresentateurs = true
                        ));
                }
            }),
            (() => this.isErreurRecuperationSession = true)
        );
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const sessionId = params.get('id');
        });
        this.recupererLesDonnees();
    }
}