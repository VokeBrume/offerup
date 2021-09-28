import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'offerup-merch-card',
  templateUrl: './merch-card.component.html'
})
export class MerchCardComponent  {
  @Input()
  title! : string;
  @Input()
  cost! : string;
  @Input()
  locator! : string;
  @Input()
  imgPath! : string;
}
