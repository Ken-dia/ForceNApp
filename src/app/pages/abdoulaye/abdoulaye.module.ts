import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { AgendaComponent } from './agenda/agenda.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { AppelsComponent } from './appels/appels.component';
import { SoumissionsComponent } from './soumissions/soumissions.component';
import { ProfilComponent } from './profil/profil.component';
import { AbdoulayeRoutingModule } from './abdoulaye-routing.module';
import { AbdoulayeComponent } from './abdoulaye.component';
import { ELearningComponent } from './e-learning/e-learning.component';


@NgModule({
  declarations: [
    AbdoulayeComponent,
    HomeComponent,
    TableauBordComponent,
    AgendaComponent,
    BibliothequeComponent,
    AppelsComponent,
    SoumissionsComponent,
    ProfilComponent,
    ELearningComponent,
  ],
  imports: [CommonModule,AbdoulayeRoutingModule]
})
export class AbdoulayeModule { }
