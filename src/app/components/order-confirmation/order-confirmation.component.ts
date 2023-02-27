import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  items: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.items;
    this.total = this.cartService.total;
  }

  resetEverything(): void {
    this.cartService.clearCart();
    this.total = 0;
    this.items = [];
    this.router.navigate(['/']);
  }
}
