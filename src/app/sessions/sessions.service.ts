import {Injectable} from '@angular/core';
import {Note} from './session/notes/note';
import {Observable, of} from 'rxjs';

/**
 * Classe de service regroupant les méthodes utiles pour les pages commençant par
 * /sessions.
 */
@Injectable({
    providedIn: 'root'
})
export class SessionsService {

    notes: Note[];

    constructor() {
    }

    /**
     * Méthode permettant de sauvegarder la note renseignée qui concerne une
     * session dans le cache ou de la mettre à jour si elle existe déjà.
     * @param note : Note la note renseignée par l'utilisateur
     * @return : void
     */
    sauvegarderNote(note: Note): void {
        if (!localStorage.getItem('NotesSessions')) {
            this.notes = [];
            this.notes.push(note);
            localStorage.setItem('NotesSessions', JSON.stringify(this.notes));
        } else {
            this.notes = JSON.parse(localStorage.getItem('NotesSessions'));
            if (this.notes.find(noteLS => noteLS.sessionId === note.sessionId)) {
                this.notes.find(noteLS => noteLS.sessionId === note.sessionId).message = note.message;
                this.notes.find(noteLS => noteLS.sessionId === note.sessionId).images = note.images;
            } else {
                this.notes.push(note);
            }
            localStorage.setItem('NotesSessions', JSON.stringify(this.notes));
        }
    }

    /**
     * Méthode permettant de retourner la note écrite pour la session indiquée.
     * @param sessionId : string l'id de la session
     * @return : Note ou null
     */
    recupererNoteParIdSession(sessionId: string): Observable<Note> | Observable<null> {
        if (localStorage.getItem('NotesSessions')) {
            this.notes = JSON.parse(localStorage.getItem('NotesSessions'));
            if (this.notes.find(noteLS => noteLS.sessionId === sessionId)) {
                return of(this.notes.find(noteLS => noteLS.sessionId === sessionId));
            } else {
                return of(null);
            }
        } else {
            return of(null);
        }
    }

}
