import { Component, Input } from '@angular/core';
import {HeroService} from './hero.service'
import {HeroesComponent} from './heroes.component'
import {DashboardComponent} from './dashboard.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
      path: '/dashboard',
      name: 'Dashboard',
      component:DashboardComponent, 
      useAsDefault: true
  }
])

@Component({
  selector: 'my-app',
  template: `
  <h1><title>{{title}}</title></h1>
  <a [routerLink] ="['Dashboard']">Dashboard</a>
  <a [routerLink] ="['Heroes']">Heroes</a>
  <router-outlet></router-outlet>
  `,
  directives: [
      ROUTER_DIRECTIVES],
  providers: [
      HeroService, 
      ROUTER_PROVIDERS]
})
export class AppComponent {
    title='Tour of Heroes'
}
