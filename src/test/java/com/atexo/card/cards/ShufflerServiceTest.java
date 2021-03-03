package com.atexo.card.cards;

import com.atexo.card.cards.exceptions.InvalidNumberOfCards;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class ShufflerServiceTest {

    private ShufflerService shufflerService;

    ShufflerServiceTest() {
        this.shufflerService = new ShufflerService();
    }

    @Test
    void getRandomColorOrderNumber() {
        assertThat(shufflerService.getRandomColorOrder()).containsExactlyInAnyOrder(ColorEnum.values());
    }

    @Test
    void getRandomValueOrderNumber() {
        assertThat(shufflerService.getRandomValueOrder()).containsExactlyInAnyOrder(ValueEnum.values());
    }

    @Test
    void getRandomHandWithNoCards() {
        Assertions.assertThrows(InvalidNumberOfCards.class, () -> {
            shufflerService.getRandomHand(0);
        });
    }

    @Test
    void getRandomHandWithTooManyCards() {
        Assertions.assertThrows(InvalidNumberOfCards.class, () -> {
            shufflerService.getRandomHand(ColorEnum.values().length * ValueEnum.values().length + 1);
        });
    }

    @Test
    void getRandomHandNoDuplicates() throws InvalidNumberOfCards {
        assertThat(shufflerService.getRandomHand(10)).doesNotHaveDuplicates();
    }
}