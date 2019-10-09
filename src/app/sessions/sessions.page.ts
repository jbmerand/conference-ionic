import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Session} from '../entities/session';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  sessionsData: Session[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.sessionsData = this.dataService.recupererDonneesSessions();
    console.log(this.sessionsData);
  }

}
