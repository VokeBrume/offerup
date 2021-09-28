import { Component, OnInit } from '@angular/core';
import { mock_merch } from '../merch-list';
import { Merch } from '../merch.model';

@Component({
  selector: 'offerup-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  merchcards: Merch [] = [];

  constructor() {
    for (var merch of mock_merch) {
      this.merchcards.push(new Merch(merch))
    }
  }

}
