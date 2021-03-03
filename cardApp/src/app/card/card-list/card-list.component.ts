import {Component, OnInit} from '@angular/core';
import {Card} from "../card";
import {ColorEnum} from "../colorEnum";
import {ValueEnum} from "../valueEnum";
import {CardService} from "../card.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [];
  colorOrder: ColorEnum[] = [];
  valueOrder: ValueEnum[] = [];

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardService.getHand().subscribe(data => {
      this.cards = data;
    });
    this.cardService.getColorOrder().subscribe(data => {
      this.colorOrder = data;
    });
    this.cardService.getValueOrder().subscribe(data => {
      this.valueOrder = data;
    });
  }

  renderValue(value: ValueEnum) {
    return this.cardService.renderValue(value);
  }

  async sort() {
    /* For Debug purposes
    console.log(this.cards);
    console.log(this.cardService.orderDeck(this.valueOrder, this.colorOrder, this.cards));
    */
    this.cards = this.cardService.orderDeck(this.valueOrder, this.colorOrder, this.cards);
  }
}
