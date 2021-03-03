package com.atexo.card.cards;

import com.atexo.card.cards.exceptions.InvalidNumberOfCards;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/cards")
public class CardController {

    private ShufflerService shufflerService;

    public CardController(ShufflerService shufflerService) {
        this.shufflerService = shufflerService;
    }

    @GetMapping("/colorOrder")
    List<ColorEnum> getRandomColorOrder() {
        return shufflerService.getRandomColorOrder();
    }

    @GetMapping("/valueOrder")
    List<ValueEnum> getRandomValueOrder() {
        return shufflerService.getRandomValueOrder();
    }

    @GetMapping
    Set<Card> getRandomCard(@RequestParam int nbCards) throws InvalidNumberOfCards {
        return shufflerService.getRandomHand(nbCards);
    }
}

