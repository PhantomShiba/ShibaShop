import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Shiba cam', price: 200000, image: './assets/1.jpg' },
    { id: 2, name: 'Shiba trắng', price: 450000, image: './assets/2.jpg' },
    { id: 3, name: 'Shiba đen', price: 800000, image: './assets/3.jpg' },
    { id: 4, name: 'Shiba xám', price: 600000, image: './assets/4.jpg' },
  ];

  constructor(private cartService: CartService) { }

  addToCart(product: { id: number; name: string; price: number }) {
    this.cartService.addToCart(product);
  }
}
