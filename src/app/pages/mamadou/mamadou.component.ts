import { Component } from '@angular/core';

@Component({
  selector: 'app-mamadou',
  templateUrl: './mamadou.component.html',
  styleUrls: ['./mamadou.component.css']
})
export class MamadouComponent {
  accesRapides: any = [
    {
      title: 'Appels à candidatures',
      subtitle: 'Voir les offres disponibles',
      link: 'rappeles',
      icon: `book-open-01.png`
    },
    {
      title: 'Mes candidatures',
      subtitle: 'Voir l\'etat de vos dossiers',
      link: 'candidatures',
      icon: `send.png`
    },
    {
      title: 'Mon Profil',
      subtitle: 'Compléter votre profil',
      link: 'profil',
      icon: 'user-01.png'
    },
    {
      title: 'Plateforme E-learning',
      subtitle: 'Accéder à la plateforme',
      link: 'e-learning',
      icon:'graduation-hat-01.png'
    },
    {
      title: 'E-bibliothéque',
      subtitle: 'Accéder à la plateforme',
      link: 'e-biblitheque',
      icon: 'book-open-01.png'
    },
    {
      title: 'Mon Agenda',
      subtitle: 'Le sous titre ici',
      link: 'agenda',
      icon: 'calendar-check-01.png'
    }
  ];
  appels: any = [
    {
      img_src:'../../../assets/img/image-3.png',
      title: 'Certificat Dev Logiciel',
      description: 'Obtenez une certification professionnelles en dessin digital et intégrer les plus grands studios du monde.'
    },
    {
      img_src:'../../../assets/img/image-4.png',
      title: 'Certificat Dessin Digital',
      description: 'Obtenez une certification professionnelles en dessin digital et intégrer les plus grands studios du monde.'
    },
    {
      img_src:'../../../assets/img/image-5.png',
      title: 'Certificat Animaition 3D',
      description: 'Obtenez une certification professionnelles en dessin digital et intégrer les plus grands studios du monde.'
    }
  ]
}
