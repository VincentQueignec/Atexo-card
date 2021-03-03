import {Component, OnInit} from '@angular/core';
import {Card} from "../card";
import {ColorEnum} from "../colorEnum";
import {ValueEnum} from "../valueEnum";
import {CardService} from "../card.service";
import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('100ms', [
          animate('.75s',
            keyframes([
              style({opacity: 0, transform: 'scale3d(0, 1, 1)', offset: 0}),
              style({opacity: 0.2, transform: 'scale3d(.5, 1, 1)', offset: 0.2}),
              style({opacity: 0.4, transform: 'scale3d(.8, 1, 1)', offset: 0.4}),
              style({opacity: 0.6, transform: 'scale3d(.1, 1, 1)', offset: 0.6}),
              style({opacity: 0.8, transform: 'scale3d(1.2, 1, 1)', offset: 0.8}),
              style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1.0}),
            ]))]), {optional: true}),
        query(':leave', stagger('75ms', [
          animate('.5s',
            keyframes([
              style({opacity: 0, transform: 'scale3d(1, 1, 1)', offset: 0}),
              style({opacity: 0.2, transform: 'scale3d(1.2, 1.2, 1.2)', offset: 0.2}),
              style({opacity: 0.4, transform: 'scale3d(1, 1, 1)', offset: 0.4}),
              style({opacity: 0.6, transform: 'scale3d(.6, .6, .6)', offset: 0.6}),
              style({opacity: 0.8, transform: 'scale3d(.3, .3, .3)', offset: 0.8}),
              style({opacity: 1, transform: 'scale3d(0, 0, 0)', offset: 1.0}),
            ]))]), {optional: true})
      ])
    ])]
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
    const sorted: Card[] = this.cardService.orderDeck(this.valueOrder, this.colorOrder, this.cards);
    this.cards = [];
    await new Promise(resolve => setTimeout(resolve, 1200));
    this.cards = sorted;
  }
}
