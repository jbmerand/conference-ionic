import { Component, OnInit } from '@angular/core';
import {Session} from '../../entities/session';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Speaker} from '../../entities/speaker';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

  sessionId: string;
  sessionData: Session;
  presentateursData: Speaker[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.sessionId = route.snapshot.paramMap.get('id');
  }

  recupererLesDonnees() {
    this.sessionData = this.dataService.recupererDonneesSessions().find(session =>
        session.id.toString() === this.sessionId);
    // FIXME: async ici
    this.sessionData.speakers.forEach(presentateurId =>
        this.presentateursData.push(this.dataService.recupererDonneesSpeakers()
            .find(speaker => speaker.id.toString() === presentateurId.toString())));
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const sessionId = params.get('id');
    });
    this.recupererLesDonnees();
  }

}
