// cart.component.ts
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  getCartItems(): any[] {
    return this.cartService.getItems();
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
  }
}
