// src/app/app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartService } from './services/cart.service';
import { CartComponent } from './components/cart/cart.component';
import { NavbarTabsComponent } from './components/navbar-tabs/navbar-tabs.component';
import { NavbarCategoriesComponent } from './components/navbar-categories/navbar-categories.component';
import { CurrencyFormatPipe } from './currency-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    NavbarTabsComponent,
    NavbarCategoriesComponent,
    CurrencyFormatPipe
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    CartService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
