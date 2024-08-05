import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductListComponent, CartComponent],
  template: `
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <app-product-list></app-product-list>
        </div>
        <div class="col-md-4">
          <app-cart></app-cart>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-site';
}
