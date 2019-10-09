import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Scheduled} from '../entities/scheduled';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dateDebutConf: string;
  dateFinConf: string;
  scheduleData: Scheduled[];

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
      if (!localStorage.getItem('scheduleData')) {
        this.dataService.recupererDonneesScheduleApiDevFest().subscribe(
            (donnees) => {
              console.log(donnees);
              localStorage.setItem('scheduleData', JSON.stringify(donnees));
            });
      }
      this.scheduleData = JSON.parse(localStorage.getItem('scheduleData'));
      this.dateDebutConf = this.scheduleData[0].dateReadable;
      this.dateFinConf = this.scheduleData[this.scheduleData.length - 1].dateReadable;
    }
}
