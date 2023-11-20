import { Component } from '@angular/core';

@Component({
  selector: 'app-soumissions',
  templateUrl: './soumissions.component.html',
  styleUrls: ['./soumissions.component.css']
})
export class SoumissionsComponent {

  appels: any = [
    {
      title: 'Certificat Developpement logiciel',
      start: '21/09/2022',
      end: '22/12/2022',
      etat: 'Retenu'
    },
    {
      title: 'Certificat Animaition 3D',
      start: '21/09/2022',
      end: '22/12/2022',
      etat: 'En cours'
    },
    {
      title: 'Certificat Dessin Digital',
      start: '21/09/2022',
      end: '22/12/2022',
      etat: 'Non Retenu'
    }



  ];

}
