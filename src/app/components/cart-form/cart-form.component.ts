import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent {
  options: number[] = [1, 2, 3, 4, 5, 10, 20, 30, 50, 100];
  quantityInput = new FormControl('1');
  quantity = Number(this.quantityInput);

  @Input() product!: Product;

  constructor(private cartService: CartService) { }

  addToCart(product: Product) {
    product.quantity = this.quantity;
    this.cartService.addToCart(product);
  }
}
