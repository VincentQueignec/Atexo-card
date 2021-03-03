import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardListComponent} from './card-list.component';
import {CardService} from "../card.service";
import {HttpClientModule} from "@angular/common/http";

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CardListComponent],
      providers: [CardService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
