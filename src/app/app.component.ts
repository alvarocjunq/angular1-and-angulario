import { Component, Renderer2, ViewChild, ElementRef, ApplicationRef, OnInit } from '@angular/core';
import { ROUTES, Application, Route } from './routes';
import { EventManager } from '../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAngularJS = true;
  isAngular = true;

  @ViewChild('projetobase')
  projetobase: ElementRef;

  @ViewChild('scaffolding')
  scaffolding: ElementRef;

  constructor(private appRef: ApplicationRef, private eventManager: EventManager) { }

  ngOnInit() {
    for (let i = 0, len = ROUTES.length; i < len; i++) {
      this[ROUTES[i].application].nativeElement.src = `${ROUTES[i].url}`;
    }
  }

  activeRoute(application: string, route: string) {

    // Pegar a aplicacao clicada
    const _app = ROUTES.find((app: Application) => {
      return app.application === application;
    });

    const _route = _app.routes.find((value: Route) => {
      return value.path === route;
    });

    for (let i = 0, len = ROUTES.length; i < len; i++) {
      this[ROUTES[i].application].nativeElement.style.display = 'none';
    }

    this[_app.application].nativeElement.style.display = 'block';
    // this[_app.application].nativeElement.src = `${_app.url}${_route.path}`;

    this[_app.application].nativeElement.dispatchEvent(new Event('getMessage'));
    window.postMessage(_route.path, _app.url);
    // window.name = _route.path;
  }
}
