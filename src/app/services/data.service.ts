import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Speaker} from '../entities/speaker';
import {Session} from '../entities/session';
import {Scheduled} from '../entities/scheduled';
import {map, tap} from 'rxjs/operators';

const URL_API_DEVFEST = 'https://devfest-nantes-2018-api.cleverapps.io';

/**
 * Classe regroupant les services liés aux données en cache et utilisés par
 * différentes pages.
 */
@Injectable({
    providedIn: 'root'
})
export class DataService {

    /**
     * Constructeur
     * @param httpClient : HttpClient
     */
    constructor(private httpClient: HttpClient) {}

    /**
     * Récupère les données JSON des présentateurs de l'API du DevFest et les
     * retourne sous forme d'un observable.
     * @return : Observable<Speaker[]> observable du tableau des présentateurs
     */
    recupererDonneesSpeakersApiDevFest(): Observable<Speaker[]> {
        return this.httpClient.get<any>(`${URL_API_DEVFEST}/speakers`)
            .pipe(map(speakers => Object.values(speakers)));
    }

    /**
     * Récupère les données JSON des sessions de l'API du DevFest et les
     * retourne sous forme d'un observable.
     * @return : Observable<Session[]> observable du tableau des sessions
     */
    recupererDonneesSessionsApiDevFest(): Observable<Session[]> {
        return this.httpClient.get<any>(`${URL_API_DEVFEST}/sessions`)
            .pipe(map(sessions => Object.values(sessions)));
    }

    /**
     * Récupère les données JSON des dates et des heures des événements à
     * partir de l'API du DevFest et le retourne sous forme d'un observable.
     * @return : Observable<Scheduled[]> : observable du tableau des événements
     */
    recupererDonneesScheduleApiDevFest(): Observable<Scheduled[]> {
        return this.httpClient.get<any>(`${URL_API_DEVFEST}/schedule`);
    }

    /**
     * Sollicite les données dans le cache ou lance la méthode qui fait une
     * requête auprès de l'API du DevFest pour retourner les données des sessions.
     * @return : Observable<Session[]> observable du tableau des sessions
     */
    recupererDonneesSessions(): Observable<Session[]> {
        if (!localStorage.getItem('sessionsData')) {
            return this.recupererDonneesSessionsApiDevFest().pipe(tap(
                (donnees) => {
                    localStorage.setItem('sessionsData', JSON.stringify(donnees));
                }));
        } else {
            return of(JSON.parse(localStorage.getItem('sessionsData')));
        }
    }

    /**
     * Sollicite les données dans le cache ou lance la méthode qui fait une
     * requête auprès de l'API du DevFest pour retourner les données des
     * présentateurs.
     * @return : Observable<Speaker[]> observable du tableau des présentateurs
     */
    recupererDonneesSpeakers(): Observable<Speaker[]> {
        if (!localStorage.getItem('speakersData')) {
            return this.recupererDonneesSpeakersApiDevFest().pipe(tap(
                (donnees) => {
                    localStorage.setItem('speakersData', JSON.stringify(donnees));
                }));
        } else {
            return of(JSON.parse(localStorage.getItem('speakersData')));
        }
    }
}
