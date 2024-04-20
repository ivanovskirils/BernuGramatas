import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedCategory: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    console.log('Product list component initialized.');
    // Fetch products from the JSON file
    this.http.get<any[]>('assets/products.json').subscribe((products) => {
      console.log('Products fetched:', products);
      // Map over the products array to transform each product
      this.products = products.map(product => ({
        ...product,
        price: parseFloat(product.price.replace(',', '.')), // Convert price from string to number
        estimatedDeliveryDate: this.calculateEstimatedDeliveryDate(product.workingDaysForDelivery) // Calculate estimated delivery date
      }));
      console.log('Processed products:', this.products); // Log processed products
      
      // Filter products based on the selected category
      this.route.params.subscribe(params => {
        console.log('Route parameters:', params);
        this.selectedCategory = params['category'];
        console.log('Selected category:', this.selectedCategory);
        if (this.selectedCategory) {
          this.products = this.products.filter(product => product.category === this.selectedCategory);
          console.log('Filtered products:', this.products);
        }
      });
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

  filterProducts(category: string): void {
    this.selectedCategory = category;
  }  

  isProductInCategory(product: any): boolean {
    return this.selectedCategory ? product.category === this.selectedCategory : true;
  
  }
  calculateEstimatedDeliveryDate(workingDays: number): Date {
    const currentDate = new Date();
    console.log('Current date:', currentDate);
  
    let deliveryDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000)); // Start from the next day
    let remainingDays = workingDays;
    let skippedWeekend = 0;
    while (remainingDays > 0) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      const dayOfWeek = deliveryDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip Saturday (6) and Sunday (0)
        remainingDays--;
      } else {
        skippedWeekend++;
      }
    }
  
    console.log('Estimated delivery date:', deliveryDate);
    console.log('Skipped weekends:', skippedWeekend);
    return deliveryDate;
  }
}
