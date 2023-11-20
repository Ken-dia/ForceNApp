import { Component } from '@angular/core';
//import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  activeTab: string = 'infos';

  changeTab(tab: string) {
    this.activeTab = tab;
  }
  ngOnInit(): void {
    //initFlowbite();
  }
}
