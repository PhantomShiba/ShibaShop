import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartTotalSubject = new BehaviorSubject<number>(0);

  cartTotal$ = this.cartTotalSubject.asObservable();

  constructor() { }

  addToCart(product: { id: number; name: string; price: number }) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateCartTotal();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCartTotal();
  }

  getCartItems() {
    return this.cartItems;
  }

  private updateCartTotal() {
    const total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.cartTotalSubject.next(total);
  }
}
