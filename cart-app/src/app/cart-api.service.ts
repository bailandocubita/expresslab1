import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(private client: HttpClient) { }

  getAllItems() {
    return this.client.get('http://localhost:3000');
  };

  deleteItem(id: number) {

  };

  addItem(item: Item) {

  }
}
