import { Component, OnInit } from '@angular/core';
import { CartApiService } from '../cart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service: CartApiService) { }

  ngOnInit(): void {
    this.service.getAllItems();
  }

}
