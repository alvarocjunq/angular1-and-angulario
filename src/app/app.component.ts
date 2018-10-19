import { Component, ViewChild, ElementRef } from '@angular/core';
import { Applications } from './applications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('angularjs')
  angularjs: ElementRef;

  @ViewChild('angular')
  angular: ElementRef;

  route(application: string, route: string) {

    const url = Applications
      // Ocultar iframes
      .map(app => {
        this[app.application].nativeElement.style.display = 'none';
        return app;
      })
      // Pegar URL
      .find(app => app.application === application).url;

    // Mostrar iframes e setar url
    const iframe = this[application].nativeElement;
    iframe.style.display = 'block';
    iframe.src = `${url}${route}`;
  }
}
