import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Speaker} from '../entities/speaker';
import {Session} from '../entities/session';
import {Scheduled} from '../entities/scheduled';
import {map} from 'rxjs/operators';

const URL_API_DEVFEST = 'https://devfest-nantes-2018-api.cleverapps.io';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) {

    }

    recupererDonneesSpeakersApiDevFest(): Observable<Speaker[]> {
        return this.httpClient.get<any>(`${URL_API_DEVFEST}/speakers`).pipe(map(speakers => Object.values(speakers)));
    }

    recupererDonneesSessionsApiDevFest(): Observable<Session[]> {
        return this.httpClient.get<any>(`${URL_API_DEVFEST}/sessions`).pipe(map(sessions => Object.values(sessions)));
    }

    recupererDonneesScheduleApiDevFest(): Observable<Scheduled[]> {
        return this.httpClient.get<any>(`${URL_API_DEVFEST}/schedule`);
    }

    recupererDonneesSessions(): Observable<Session[]> {
        if (!localStorage.getItem('sessionsData')) {
            this.recupererDonneesSessionsApiDevFest().subscribe(
                (donnees) => {
                    localStorage.setItem('sessionsData', JSON.stringify(donnees));
                });
        }
        return of(JSON.parse(localStorage.getItem('sessionsData')));
    }

    recupererDonneesSpeakers(): Observable<Speaker[]> {
        if (!localStorage.getItem('speakersData')) {
            this.recupererDonneesSpeakersApiDevFest().subscribe(
                (donnees) => {
                    localStorage.setItem('speakersData', JSON.stringify(donnees));
                });
        }
        return of(JSON.parse(localStorage.getItem('speakersData')));
    }
}
