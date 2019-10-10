import {Injectable} from '@angular/core';
import {Note} from './session/notes/note';

@Injectable({
    providedIn: 'root'
})
export class SessionsService {

    notes: Note[];

    constructor() {
    }

    sauvegarderNote(note: Note): void {
        if (!localStorage.getItem('NotesSessions')) {
            this.notes = [];
            this.notes.push(note);
            localStorage.setItem('NotesSessions', JSON.stringify(this.notes));
        } else {
            this.notes = JSON.parse(localStorage.getItem('NotesSessions'));
            if (this.notes.find(noteLS => noteLS.sessionId === note.sessionId)) {
                this.notes.find(noteLS => noteLS.sessionId === note.sessionId).message = note.message;
            } else {
                this.notes.push(note);
            }
            localStorage.setItem('NotesSessions', JSON.stringify(this.notes));
        }
    }

    recupererNoteParIdSession(sessionId: string): Note | null {
        this.notes = JSON.parse(localStorage.getItem('NotesSessions'));
        if (this.notes.find(noteLS => noteLS.sessionId === sessionId)) {
            return this.notes.find(noteLS => noteLS.sessionId === sessionId);
        } else {
            return null;
        }
    }
}
