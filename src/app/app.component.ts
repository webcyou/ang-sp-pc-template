import { Component } from '@angular/core';
import is from 'is_js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMobile: boolean = is.mobile();
}
