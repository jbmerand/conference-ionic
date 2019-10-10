import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DataService} from '../../../services/data.service';
import {Session} from '../../../entities/session';
import {Note} from './note';
import {SessionsService} from '../../sessions.service';

/**
 * Composant gérant l'affichage de la page de note sur une session.
 */
@Component({
    selector: 'app-notes',
    templateUrl: './notes.page.html',
    styles: [],
})
export class NotesPage implements OnInit {

    sessionId: string;
    sessionData: Session;
    isErreurRecuperationSession: boolean;
    contenuNote: string;

    /**
     * Constructeur
     * @param route : ActivatedRoute
     * @param dataService : DataService
     * @param sessionsService : SessionsService
     */
    constructor(private route: ActivatedRoute, private dataService: DataService,
                private sessionsService: SessionsService) {
        this.sessionId = route.snapshot.paramMap.get('id');
    }

    /**
     * Méthode récupérant les données nécessaires à l'affichage de la page.
     */
    recupererDonnees(): void {
        this.dataService.recupererDonneesSessions().subscribe(
            (sessions => this.sessionData = sessions.find(
                session => session.id.toString() === this.sessionId)),
            () => this.isErreurRecuperationSession = true
        );
        const note = this.sessionsService.recupererNoteParIdSession(this.sessionId);
        if (note != null) {
            this.contenuNote = note.message;
        } else {
            this.contenuNote = '';
        }
    }

    /**
     * Méthode pour enregistrer une note en sollicitant un service.
     */
    enregistrerNote(): void {
        const note: Note = {sessionId: this.sessionId, message: this.contenuNote};
        this.sessionsService.sauvegarderNote(note);
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(
            (params: ParamMap) => {
                const sessionId = params.get('id');
            }
        );
        this.recupererDonnees();
    }

}
