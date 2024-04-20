import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-navbar-categories',
  templateUrl: './navbar-categories.component.html',
  styleUrls: ['./navbar-categories.component.scss']
})
export class NavbarCategoriesComponent implements OnInit {
  activeCategory: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveCategory();
      }
    });
  }

  setActiveCategory(): void {
    const url = this.router.url;
    const parts = url.split('/');
    if (parts.length > 2 && parts[1] === 'products') {
      this.activeCategory = parts[2];
      console.log('Active category:', this.activeCategory);
    } else {
      this.activeCategory = '';
    }
  }
}
