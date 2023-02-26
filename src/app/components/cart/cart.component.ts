import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Product[] = this.cartService.getItems();
  total: number = this.cartService.total;

  constructor(private cartService: CartService) { }

  removeItem(item: Product) {
    this.cartService.removeFromCart(item);
    this.total = this.cartService.total;
    window.alert("Item Successfully Removed!");
  }
}
