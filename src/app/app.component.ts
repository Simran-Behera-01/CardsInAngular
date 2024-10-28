import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  ListProductsComponent } from "./Products/list-products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ListProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CardAssignment';
}
