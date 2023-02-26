import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  fullName: string = "";
  emailAddress: string = "";
  validateEmail: boolean = true;
  physicalAddress: string = "";
  cardNumber: string = "";

  constructor(private cartService: CartService) { }

  onSubmit(): void {
    window.alert("Thanks for placing an order with us " + this.fullName);
  }
}
