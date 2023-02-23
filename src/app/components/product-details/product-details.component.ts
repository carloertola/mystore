import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [];
  id: number = 1;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
    });

    const routeParams = this.route.snapshot.paramMap;
    const productIdRoute = Number(routeParams.get('productId'));
    this.id = productIdRoute - 1;
  }
}
