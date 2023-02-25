import { Component } from '@angular/core';

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

  onSubmit() {
    window.alert("Your order was successful " + this.client + ' and will be shipped to you soon')
  }
}
