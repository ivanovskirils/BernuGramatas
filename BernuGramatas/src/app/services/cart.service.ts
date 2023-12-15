// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  getItems(): any[] {
    return this.cartItems;
  }

  addToCart(product: any): void {
    this.cartItems.push(product);
  }

  removeFromCart(product: any): void {
    const index = this.cartItems.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getCartItemCount(): number {
    return this.cartItems.length;
  }
}
