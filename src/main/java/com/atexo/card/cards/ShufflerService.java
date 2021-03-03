package com.atexo.card.cards;

import com.atexo.card.cards.exceptions.InvalidNumberOfCards;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ShufflerService {

    Logger logger = LoggerFactory.getLogger(ShufflerService.class);
    public static final int NUMBER_OF_VALUES = ValueEnum.values().length;
    public static final int NUMBER_OF_COLORS = ColorEnum.values().length;
    private Random random = new Random();

    public List<ColorEnum> getRandomColorOrder() {
        List<ColorEnum> shuffled = Arrays.asList(ColorEnum.values());
        Collections.shuffle(shuffled);
        logger.debug("color order shuffled with values : {}", shuffled);
        return shuffled;
    }

    public List<ValueEnum> getRandomValueOrder() {
        List<ValueEnum> shuffled = Arrays.asList(ValueEnum.values());
        Collections.shuffle(shuffled);
        logger.debug("value order shuffled with values : {}", shuffled);
        return shuffled;
    }

    public Set<Card> getRandomHand(int numberOfCards) throws InvalidNumberOfCards {
        if (numberOfCards > NUMBER_OF_VALUES * NUMBER_OF_COLORS || numberOfCards <= 0)
            throw new InvalidNumberOfCards();
        Set<Card> hand = new HashSet<>();
        while (hand.size() < numberOfCards)
            hand.add(randomPickSingleCard());
        logger.debug("Random deck of {} cards generated : {}", numberOfCards, hand);
        return hand;
    }

    private Card randomPickSingleCard() {
        return Card.aCard().withValue(ValueEnum.values()[random.nextInt(NUMBER_OF_VALUES)]).withColor(ColorEnum.values()[random.nextInt(NUMBER_OF_COLORS)]).build();
    }
}

