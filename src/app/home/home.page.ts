import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Scheduled} from '../entities/scheduled';

/**
 * Composant gérant la page d'accueil.
 */
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styles: ['#logoImg { width: 300px; height: 300px; }'],
})
export class HomePage implements OnInit {

    dateDebutConf: string;
    dateFinConf: string;
    scheduleData: Scheduled[];

    /**
     * Constructeur
     * @param dataService : DataService
     */
    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        if (!localStorage.getItem('scheduleData')) {
            this.dataService.recupererDonneesScheduleApiDevFest().subscribe(
                (donnees) => {
                    localStorage.setItem('scheduleData', JSON.stringify(donnees));
                    this.scheduleData = donnees;
                    this.dateDebutConf = this.scheduleData[0].dateReadable;
                    this.dateFinConf = this.scheduleData[this.scheduleData.length - 1].dateReadable;
                });
        }
        this.scheduleData = JSON.parse(localStorage.getItem('scheduleData'));
        if (this.scheduleData) {
            this.dateDebutConf = this.scheduleData[0].dateReadable;
            this.dateFinConf = this.scheduleData[this.scheduleData.length - 1].dateReadable;
        }
        this.dataService.recupererDonneesSessions().subscribe();
        this.dataService.recupererDonneesSpeakers().subscribe();
    }
}
