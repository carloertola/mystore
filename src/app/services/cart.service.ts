import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  total: number = 0;

  constructor() { }

  addToCart(product: Product) {
    let existingProduct = this.items.find(({ id }) => id === product.id);
    if(existingProduct === undefined) {
      this.total += product.quantity * product.price;
      this.items.push(product);
      window.alert("Product successfully added to Cart!")
    } else {
      this.total += product.quantity * product.price;
      existingProduct.quantity += product.quantity;
      window.alert("We've added more of this item!")
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.total = 0;
    return this.items;
  }

  removeFromCart(product: Product) {
    this.items.forEach((item, i) => {
      if(item == product) {
        this.total -= item.price * item.quantity;
        this.items.splice(i, 1);
      }
    });
  }
}
