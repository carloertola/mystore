import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    let existingProduct = this.items.find(({ id }) => id === product.id);
    if(existingProduct === undefined) {
      this.items.push(product);
      window.alert("Product successfully added to Cart!")
    } else {
      existingProduct.quantity += product.quantity;
      window.alert("We've added more of this item!")
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  addTotal() {
    let total: number = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }
}
