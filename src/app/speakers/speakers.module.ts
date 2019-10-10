import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SpeakersPage} from './speakers.page';

const routes: Routes = [
    {
        path: '',
        component: SpeakersPage
    },
    {
        path: ':id',
        loadChildren: () => import ('./speaker/speaker.module').then(m => m.SpeakerPageModule)
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SpeakersPage]
})
export class SpeakersPageModule {
}
