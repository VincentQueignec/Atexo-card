import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {HttpClientModule} from "@angular/common/http";
import {CardService} from "../card.service";
import {ColorEnum} from "../colorEnum";
import {ValueEnum} from "../valueEnum";

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CardComponent],
      providers: [CardService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = {color: ColorEnum.DIAMOND, value: ValueEnum.A};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
