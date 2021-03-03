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

  it('should contain all colors in any order', () => {
    service.getColorOrder().subscribe(data => {
      expect(data).toHaveSize(4);
      expect(data).toContain(ColorEnum[ColorEnum.DIAMOND]);
      expect(data).toContain(ColorEnum[ColorEnum.CLUB]);
      expect(data).toContain(ColorEnum[ColorEnum.HEART]);
      expect(data).toContain(ColorEnum[ColorEnum.SPADE]);
    });
  });

  it('should contain all values in any order', () => {
    service.getValueOrder().subscribe(data => {
      expect(data).toHaveSize(13);
      expect(data).toContain(ValueEnum[ValueEnum.C2]);
      expect(data).toContain(ValueEnum[ValueEnum.C3]);
      expect(data).toContain(ValueEnum[ValueEnum.C4]);
      expect(data).toContain(ValueEnum[ValueEnum.C5]);
      expect(data).toContain(ValueEnum[ValueEnum.C6]);
      expect(data).toContain(ValueEnum[ValueEnum.C7]);
      expect(data).toContain(ValueEnum[ValueEnum.C8]);
      expect(data).toContain(ValueEnum[ValueEnum.C9]);
      expect(data).toContain(ValueEnum[ValueEnum.C10]);
      expect(data).toContain(ValueEnum[ValueEnum.J]);
      expect(data).toContain(ValueEnum[ValueEnum.Q]);
      expect(data).toContain(ValueEnum[ValueEnum.K]);
      expect(data).toContain(ValueEnum[ValueEnum.A]);
    });
  });

  it('should render value without the C char', () => {
    expect(service.renderValue(ValueEnum.C2)).toEqual("2");
    expect(service.renderValue(ValueEnum.C3)).toEqual("3");
    expect(service.renderValue(ValueEnum.C4)).toEqual("4");
    expect(service.renderValue(ValueEnum.C5)).toEqual("5");
    expect(service.renderValue(ValueEnum.C6)).toEqual("6");
    expect(service.renderValue(ValueEnum.C7)).toEqual("7");
    expect(service.renderValue(ValueEnum.C8)).toEqual("8");
    expect(service.renderValue(ValueEnum.C9)).toEqual("9");
    expect(service.renderValue(ValueEnum.C10)).toEqual("10");
    expect(service.renderValue(ValueEnum.J)).toEqual("J");
    expect(service.renderValue(ValueEnum.Q)).toEqual("Q");
    expect(service.renderValue(ValueEnum.K)).toEqual("K");
    expect(service.renderValue(ValueEnum.A)).toEqual("A");
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
