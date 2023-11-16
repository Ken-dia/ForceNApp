import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbdoulayeComponent } from './abdoulaye.component';
import { HomeComponent } from './home/home.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { AgendaComponent } from './agenda/agenda.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { AppelsComponent } from './appels/appels.component';
import { SoumissionsComponent } from './soumissions/soumissions.component';
import { ProfilComponent } from './profil/profil.component';
import { ELearningComponent } from './e-learning/e-learning.component';
const routes: Routes = [
  {
    path: '',
    component: AbdoulayeComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'tableau-bord',
        component: TableauBordComponent
      },
      {
        path: 'agenda',
        component: AgendaComponent
      },
      {
        path: 'bibliotheque',
        component: BibliothequeComponent
      },
      {
        path: 'appels',
        component: AppelsComponent
      },
      {
        path: 'soumissions',
        component: SoumissionsComponent
      },
      {
        path: 'profil',
        component: ProfilComponent
      },
      {
        path: 'e-learning',
        component: ELearningComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbdoulayeRoutingModule { }
