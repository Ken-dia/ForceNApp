import { Component } from '@angular/core';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent {
  bibliotheques: any = [
    {
      title: 'RESEARCH4LIFE',
      subtitle: 'Le sous-titre ici',
      color: '#175a93',
      img_src: 'Icon-8.png'
    },
    {
      title: 'JSTOR',
      subtitle: 'Le sous-titre ici',
      color: '#00a13a',
      img_src: 'Icon-10.png'
    },
    {
      title: 'SCOLARVOX',
      subtitle: 'Le sous-titre ici',
      color: '#622f4e',
      img_src: 'dataflow-04.png'
    },
    {
      title: 'RESEARCH4LIFE',
      subtitle: 'Le sous-titre ici',
      color: '#cc6a15',
      img_src: 'download-cloud-02.png'
    },
    {
      title: 'JSTOR',
      subtitle: 'Le sous-titre ici',
      color: '#9b73eb',
      img_src: 'Icon-11.png'
    },
    {
      title: 'SCOLARVOX',
      subtitle: 'Le sous-titre ici',
      color: '#0c2d4a',
      img_src: 'iconContainer-2.png'
    }
  ];
}
