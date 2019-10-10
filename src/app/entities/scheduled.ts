/**
 * Interface d'un événement du DevFest.
 */
export interface Scheduled {
    date: string;
    dateReadable: string;
    tracks: object[];
    timeslots: object[];
}
