import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  client: string = "";
  email: string = "";
  cardNumber: string = "";
  address: string = "";

  constructor(private cartService: CartService) { }

  onSubmit() {
    window.alert("Your order was successful " + this.client + ' and will be shipped to you soon');
    this.cartService.clearCart();
  }
}
