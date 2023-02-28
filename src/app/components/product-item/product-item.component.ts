import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  quantity: string = "";
  @Input() product: Product = {
    id: 1,
    name: "",
    description: "",
    price: 0,
    url: "",
    quantity: 1
  }
  @Output() added = new EventEmitter();

  emitData(qty: string) {
    let quantity: number = Number(qty);
    this.product.quantity = quantity;
    this.added.emit(this.product);
  }
}
