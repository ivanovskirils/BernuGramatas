// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private router: Router, private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    // Fetch products from the JSON file
    this.http.get<any[]>('assets/products.json').subscribe((products) => {
      this.products = products;
    });
  }

  viewProductDetails(product: any): void {
    // Navigate to the product details page
    this.router.navigate(['/products', product.id]);
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    console.log('Added to cart:', product);
  }
}
