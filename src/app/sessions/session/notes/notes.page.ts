import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DataService} from '../../../services/data.service';
import {Session} from '../../../entities/session';
import {Note} from './note';
import {SessionsService} from '../../sessions.service';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

/**
 * Composant gérant l'affichage de la page de note sur une session.
 */
@Component({
    selector: 'app-notes',
    templateUrl: './notes.page.html',
    styles: ['ion-textarea { border: dashed; border-color: silver; ' +
    'border-radius: 16px; background-color: #f5f6f9; font-style: italic}'],
})
export class NotesPage implements OnInit {

    sessionId: string;
    sessionData: Session;
    isErreurRecuperationSession: boolean;
    contenuNote: string;
    isErreurPriseDePhoto: boolean;
    imagesUrlBase64: string[];
    imagesUrlBase64Sanitized: SafeUrl[];

    /**
     * Constructeur
     * @param route : ActivatedRoute
     * @param dataService : DataService
     * @param sessionsService : SessionsService
     * @param sanitizer : DomSanitizer
     */
    constructor(private route: ActivatedRoute, private dataService: DataService,
                private sessionsService: SessionsService, private sanitizer: DomSanitizer) {
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
        this.sessionsService.recupererNoteParIdSession(this.sessionId).subscribe(
            (note => {
                if (note != null) {
                    this.contenuNote = note.message;
                    this.imagesUrlBase64 = note.images;
                    this.imagesUrlBase64Sanitized = this.sanitizeTableauDUrls(note.images);
                } else {
                    this.contenuNote = '';
                    this.imagesUrlBase64 = [];
                    this.imagesUrlBase64Sanitized = [];
                }
            })
        );
    }

    /**
     * Méthode pour enregistrer une note en sollicitant un service.
     */
    enregistrerNote(): void {
        const note: Note = {sessionId: this.sessionId, message: this.contenuNote, images: this.imagesUrlBase64};
        console.log(note.images);
        this.sessionsService.sauvegarderNote(note);
    }

    /**
     * Donne possibilité à l'utilisateur de prendre une photo et la charge dans le html.
     */
    prendreUnePhoto(): void {
        Plugins.Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Base64,
            source: CameraSource.Camera
        }).then(
            response => {
                this.imagesUrlBase64.push('data:image/jpeg;base64, ' + response.base64String);
                this.imagesUrlBase64Sanitized = this.sanitizeTableauDUrls(this.imagesUrlBase64);
            }
        );
    }

    /**
     * Laisse à utilisateur la possibilité de charger une photo existante dans le html.
     */
    async chercherUnePhoto(): Promise<void> {
        const image = await Plugins.Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            source: CameraSource.Photos
        }).then(
            response => {
                this.imagesUrlBase64.push('data:image/jpeg;base64, ' + response.base64String);
                this.imagesUrlBase64Sanitized = this.sanitizeTableauDUrls(this.imagesUrlBase64);
            }
        );
    }

    /**
     * Sécurise un tableau de liens pour un chargement html
     * @param tableau : string[]
     * @return : SafeUrl[]
     */
    sanitizeTableauDUrls(tableau: string[]): SafeUrl[] {
        return tableau.map(element => this.sanitizer.bypassSecurityTrustUrl(element));
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
