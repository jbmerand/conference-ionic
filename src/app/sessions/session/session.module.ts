import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SessionPage} from './session.page';

const routes: Routes = [
    {
        path: '',
        component: SessionPage
    },
    {
        path: 'notes',
        loadChildren: () => import ('./notes/notes.module').then(m => m.NotesPageModule)
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SessionPage]
})
export class SessionPageModule {
}
