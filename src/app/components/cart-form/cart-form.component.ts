import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent {
  options: number[] = [1, 2, 3, 4, 5, 10, 20, 30, 50, 100];
  @Input() product!: Product;
}
