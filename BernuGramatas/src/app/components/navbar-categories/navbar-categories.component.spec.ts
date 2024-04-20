import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCategoriesComponent } from './navbar-categories.component';

describe('NavbarCategoriesComponent', () => {
  let component: NavbarCategoriesComponent;
  let fixture: ComponentFixture<NavbarCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
