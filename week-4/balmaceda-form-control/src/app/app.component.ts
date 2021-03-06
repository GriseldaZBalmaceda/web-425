/*
============================================
; Title: App Component
; Author: Griselda Balmaceda
; Description: Creating a form that will output stock pric
;===========================================
*/

import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`
  <h1>Testing</h1>
  <nav class="navbar navbar-expand bg-dark navbark-dark">
  <div class="navbar-nav">
    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
  </div>
</nav>
<br /><br />
<div class="container">
  <div class="row">
    <div class="col">
      <h2>Handling Form Event with Observables </h2>
      <br />
      
      <div class="form-group">
        <label for="txtStockPrice">Stock Price:</label>
        <input type="text" class="form-control" id="txtStockPrice"
        placeholder="Enter stock price..." [formControl]="searchInput"/>
      </div>

    </div>
  </div>
  <br /> <br />
  <div class="row">
    <div class="col">
      <h4 class="txt-bold greenMessage">Results: {{convertedStockPrice}}</h4>
    </div>
  </div>
  </div>

  `,
  styles:[`
  .txt-bold{font-wieght:bold}
  .greenMessage{
    background-color:lightgreen;
    border:solid 1px green;
  }
  `

  ] 
})
export class AppComponent {
searchInput=new FormControl('')
convertedStockPrice:string;
constructor(){
  this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe(stock=>this.getStockQuoteFromServer(stock))
}
getStockQuoteFromServer(stock:string){
  this.convertedStockPrice=`the price of ${stock} is ${(100 * Math.random()).toFixed(4)}`
}
}
