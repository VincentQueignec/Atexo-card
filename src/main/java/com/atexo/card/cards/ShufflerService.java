package com.atexo.card.cards;

import com.atexo.card.cards.exceptions.InvalidNumberOfCards;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ShufflerService {

    public static final int NUMBER_OF_VALUES = ValueEnum.values().length;
    public static final int NUMBER_OF_COLORS = ColorEnum.values().length;
    private Random random = new Random();

    public List<ColorEnum> getRandomColorOrder() {
        List<ColorEnum> shuffled = Arrays.asList(ColorEnum.values());
        Collections.shuffle(shuffled);
        return shuffled;
    }

    public List<ValueEnum> getRandomValueOrder() {
        List<ValueEnum> shuffled = Arrays.asList(ValueEnum.values());
        Collections.shuffle(shuffled);
        return shuffled;
    }

    public Set<Card> getRandomHand(int numberOfCards) throws InvalidNumberOfCards {
        if (numberOfCards > NUMBER_OF_VALUES * NUMBER_OF_COLORS || numberOfCards <= 0)
            throw new InvalidNumberOfCards();
        Set<Card> hand = new HashSet<>();
        while (hand.size() < numberOfCards)
            hand.add(randomPickSingleCard());
        return hand;
    }

    private Card randomPickSingleCard() {
        return Card.aCard().withValue(ValueEnum.values()[random.nextInt(NUMBER_OF_VALUES)]).withColor(ColorEnum.values()[random.nextInt(NUMBER_OF_COLORS)]).build();
    }
}

