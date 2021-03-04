import {TestBed} from '@angular/core/testing';

import {CardService} from './card.service';
import {HttpClientModule} from "@angular/common/http";
import {ColorEnum} from "./colorEnum";
import {ValueEnum} from "./valueEnum";
import {Card} from "./card";

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort properly a deck depending on color and value orders', () => {
    let colors: ColorEnum[] = [ColorEnum.DIAMOND, ColorEnum.SPADE, ColorEnum.HEART, ColorEnum.CLUB];

    let values: ValueEnum[] = [ValueEnum.C3, ValueEnum.A, ValueEnum.Q, ValueEnum.C6, ValueEnum.C4, ValueEnum.K,
      ValueEnum.C10, ValueEnum.C9, ValueEnum.C5, ValueEnum.C8, ValueEnum.C2, ValueEnum.C7, ValueEnum.J];

    let unsortedDeck: Card[] = [{value: ValueEnum.C5, color: ColorEnum.CLUB}, {
      value: ValueEnum.C9,
      color: ColorEnum.HEART
    }, {value: ValueEnum.K, color: ColorEnum.HEART}, {
      value: ValueEnum.C6,
      color: ColorEnum.DIAMOND
    }, {value: ValueEnum.A, color: ColorEnum.HEART}, {
      value: ValueEnum.K,
      color: ColorEnum.DIAMOND
    }, {value: ValueEnum.C9, color: ColorEnum.CLUB}, {
      value: ValueEnum.C7,
      color: ColorEnum.DIAMOND
    }, {value: ValueEnum.C10, color: ColorEnum.HEART}, {value: ValueEnum.C3, color: ColorEnum.CLUB}];

    expect(service.orderDeck(values, colors, unsortedDeck)).toEqual([
      {value: ValueEnum.C3, color: ColorEnum.CLUB},
      {value: ValueEnum.A, color: ColorEnum.HEART},
      {value: ValueEnum.C6, color: ColorEnum.DIAMOND},
      {value: ValueEnum.K, color: ColorEnum.DIAMOND},
      {value: ValueEnum.K, color: ColorEnum.HEART},
      {value: ValueEnum.C10, color: ColorEnum.HEART},
      {value: ValueEnum.C9, color: ColorEnum.HEART},
      {value: ValueEnum.C9, color: ColorEnum.CLUB},
      {value: ValueEnum.C5, color: ColorEnum.CLUB},
      {value: ValueEnum.C7, color: ColorEnum.DIAMOND}
    ]);
  });
});
