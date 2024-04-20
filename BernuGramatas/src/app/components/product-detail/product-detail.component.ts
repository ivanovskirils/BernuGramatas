// src/app/components/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  quantity: number = 1; // Initialize quantity property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.http.get<any[]>('assets/products.json').subscribe((products) => {
        this.product = products.find((p) => p.id === +productId);
      });
    });
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  
  increaseQuantity(): void {
    this.quantity++;
  }

  addToCart(product: any): void {
    // Add product to cart
    this.cartService.addToCart(product);
    console.log('Added to cart:', product);
  }
  
}
