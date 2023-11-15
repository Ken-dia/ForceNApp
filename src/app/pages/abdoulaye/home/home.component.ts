import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  accesRapides: any = [
    {
      title: 'Appels à candidatures',
      subtitle: 'Voir les offres disponibles',
      link: '/abdoulaye/appels',
      icon: `book-open-01.png`
    },
    {
      title: 'Mes candidatures',
      subtitle: 'Voir l\'etat de vos dossiers',
      link: '/abdoulaye/appels',
      icon: `send.png`
    },
    {
      title: 'Mon Profil',
      subtitle: 'Compléter votre profil',
      link: '/abdoulaye/agenda',
      icon: 'user-01.png'
    },
    {
      title: 'Plateforme E-learning',
      subtitle: 'Accéder à la plateforme',
      link: '/abdoulaye/e-learning',
      icon:'graduation-hat-01.png'
    },
    {
      title: 'E-bibliothéque',
      subtitle: 'Accéder à la plateforme',
      link: '/abdoulaye/bibliotheque',
      icon: 'book-open-01.png'
    },
    {
      title: 'Mon Agenda',
      subtitle: 'Le sous titre ici',
      link: '/abdoulaye/agenda',
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
