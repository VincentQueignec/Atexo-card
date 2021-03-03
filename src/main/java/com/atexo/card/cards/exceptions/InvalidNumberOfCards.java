package com.atexo.card.cards.exceptions;

public class InvalidNumberOfCards extends Exception {
    public static String message = "You requested a hand with no cards or more cards than contained in the deck";

    public InvalidNumberOfCards() {
        super(message);
    }
}
