import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from '../../components/landing/landing.component';
import { PlateformComponent } from 'src/app/components/plateform/plateform.component';
import { ConnexionComponent } from 'src/app/components/connexion/connexion.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'app',
    component: PlateformComponent,
    // canActivate: [AuthenticationGuard],
    children: [
      { path: 'login', component: ConnexionComponent },
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'missions', component: MissionsComponent },
      // { path: 'comptabilite', component: ComptaComponent },
      // { path: 'profil', component: ProfilComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

