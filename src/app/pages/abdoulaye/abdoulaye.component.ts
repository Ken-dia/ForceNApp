import { Component } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-abdoulaye',
  templateUrl: './abdoulaye.component.html',
  styleUrls: ['./abdoulaye.component.css']
})
export class AbdoulayeComponent {
  ngOnInit(): void {
    initFlowbite();
  }

  // constructor(private sanitizer: DomSanitizer) {}

  // sanitizeHtml(html: string): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(html);
  // }


}
