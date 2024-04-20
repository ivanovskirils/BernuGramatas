import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-tabs',
  templateUrl: './navbar-tabs.component.html',
  styleUrls: ['./navbar-tabs.component.scss']
})
export class NavbarTabsComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects || '';
      });
  }
}
