import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soumission-table',
  templateUrl: './soumission-table.component.html',
  styleUrls: ['./soumission-table.component.css']
})
export class SoumissionTableComponent {
  @Input () appels?: any;

}
