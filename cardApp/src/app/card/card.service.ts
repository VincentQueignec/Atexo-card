import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card, WeightedCard} from "./card";
import {ColorEnum} from "./colorEnum";
import {ValueEnum} from "./valueEnum";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly cardUrl: string;


  constructor(private http: HttpClient) {
    this.cardUrl = 'http://localhost:8080/cards';
  }

  public getHand(nbCards: number = 10): Observable<Card[]> {
    let params = new HttpParams().set('nbCards', nbCards.toString());

    return this.http.get<Card[]>(this.cardUrl, {params: params});
  }

  public getColorOrder(): Observable<ColorEnum[]> {
    return this.http.get<ColorEnum[]>(this.cardUrl + "/colorOrder")
  }

  public getValueOrder(): Observable<ValueEnum[]> {
    return this.http.get<ValueEnum[]>(this.cardUrl + "/valueOrder")
  }

  public renderValue(value: ValueEnum) {
    let val = value.toString();
    if (val.startsWith("C")) {
      return val.substring(1);
    } else {
      return val;
    }
  }

  public orderDeck(valueOrder: ValueEnum[], colorOrder: ColorEnum[], deck: Card[]): Card[] {
    const weightedDeck: WeightedCard[] = this.valueCardsInDeck(valueOrder, colorOrder, deck);
    weightedDeck.sort(function (a, b) {
      if (a.weight < b.weight)
        return -1;
      if (a.weight > b.weight)
        return 1;
      else
        return 0;
    });
    return weightedDeck.map(w => ({value: w.value, color: w.color}));
  }

  private valueCardsInDeck(valueOrder: ValueEnum[], colorOrder: ColorEnum[], deck: Card[]): WeightedCard[] {
    let result: WeightedCard[] = [];
    deck.forEach(function (card) {
      const weightFromCard = (valueOrder.findIndex(v => v === card.value) + 1) * 10 + colorOrder.findIndex(c => c === card.color);
      result.push({
        value: card.value,
        color: card.color,
        weight: weightFromCard
      })
    });
    return result;
  }
}
