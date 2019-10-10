import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SessionsPage } from './sessions.page';

const routes: Routes = [
  {
    path: '',
    component: SessionsPage
  },
  {
    path: ':id',
    loadChildren: () => import ('./session/session.module').then(m => m.SessionPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SessionsPage]
})
export class SessionsPageModule {}
