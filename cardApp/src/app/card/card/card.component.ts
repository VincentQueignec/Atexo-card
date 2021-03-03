import {Component, Input} from '@angular/core';
import {CardService} from "../card.service";
import {Card} from "../card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  // @ts-ignore
  @Input() public card: Card;

  constructor(private cardService: CardService) {
  }

  renderValue() {
    return this.cardService.renderValue(this.card.value);
  }
}
