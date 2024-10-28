import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})

export class ListProductsComponent 
{
  products: Product[]=[
    {
      id: 1,
      name: "Wireless Mouse",
      Price : 25.99,
      Category: "Electronics",
      Description : "Compact wireless mouse with USB receiver",
      isAvailable: true,
      photoPath: "./Mouse.jpg"
    }
    ,{
      id: 2,
      name: "Running Shoes",
      Price : 59.99,
      Category: "Footwear",
      Description : "Lightweight running shoes with good grip",
      isAvailable: true,
      photoPath: "./shoes.jpg"
    },
    {
      id: 3,
      name: "Coffee Maker",
      Price : 89.99,
      Category: "Kitchenware",
      Description : "Prgrammable coffee maker with timer",
      isAvailable: false,
      photoPath: "./coffee.jpg"
    }
  ]
}
