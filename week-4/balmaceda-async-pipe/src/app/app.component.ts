import { Component} from '@angular/core';
import { Observable} from 'rxjs';
import { FruitService } from './fruit.service';
import {Fruit} from './fruit'
@Component({
  selector: 'app-root',
  template: `
  <br /> <br />
  <div class="container">
  <div class="row">
    <h2>Fruit Order</h2>
    <table class="table table-hover table-striped">
      <thead class="tbl-header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr  *ngFor="let fruit of fruits | async">
          <td>{{ fruit.id }}</td>
          <td>{{ fruit.name }}</td>
          <td>{{ fruit.pricePerPound }}</td>
          <td>{{ fruit.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  `,
  styleUrls: ['./app.component.scss'],
  providers:[FruitService]
})

export class AppComponent {
  fruits : Observable<Fruit[]>;
  title = 'balmaceda-async-pipe';
  constructor(private fruitService: FruitService){}

  ngOnInIt(){
    this.fruits = this.fruitService.getFruits();
  }
}
