import {ValueEnum} from "./valueEnum";
// @ts-ignore
import {ColorEnum} from "./colorEnum";

export interface Card {
  value: ValueEnum,
  color: ColorEnum
}

export interface WeightedCard {
  value: ValueEnum,
  color: ColorEnum,
  weight: number
}

