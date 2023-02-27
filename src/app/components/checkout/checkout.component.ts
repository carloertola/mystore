import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  firstName: string = "";
  lastName: string = "";
  emailAddress: string = "";
  shippingAddress = "";
  cardNumber: string = "";

  constructor(private cartService: CartService, private router: Router) { }

  onSubmit(): void {
    window.alert("Thanks for buying from us!");
    this.router.navigate(['/orderconfirmed']);
  }
}
