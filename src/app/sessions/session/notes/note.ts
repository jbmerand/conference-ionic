/**
 * Interface représentant une note sur une session.
 */
export interface Note {
    sessionId: string;
    message: string;
    images: string[];
}
