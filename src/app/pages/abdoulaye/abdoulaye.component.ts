import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-abdoulaye',
  templateUrl: './abdoulaye.component.html',
  styleUrls: ['./abdoulaye.component.css']
})
export class AbdoulayeComponent {
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


}
