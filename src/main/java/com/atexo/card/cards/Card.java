package com.atexo.card.cards;

import java.util.Objects;

public class Card {

    private ValueEnum value;
    private ColorEnum color;

    private Card() {
    }

    private Card(Builder builder) {
        setValue(builder.value);
        setColor(builder.color);
    }

    public static ICardBuilderValue aCard() {
        return new Builder();
    }

    public ValueEnum getValue() {
        return value;
    }

    public void setValue(ValueEnum value) {
        this.value = value;
    }

    public ColorEnum getColor() {
        return color;
    }

    public void setColor(ColorEnum color) {
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Card card = (Card) o;
        return value.equals(card.value) &&
                color == card.color;
    }

    @Override
    public int hashCode() {
        return Objects.hash(value, color);
    }

    @Override
    public String toString() {
        return "{" + value +
                ", " + color +
                '}';
    }

    interface ICardBuilderValue {
        ICardBuilderColor withValue(ValueEnum val);
    }

    interface ICardBuilderColor {
        ICardBuilder withColor(ColorEnum val);
    }

    interface ICardBuilder {
        Card build();
    }

    public static final class Builder implements ICardBuilderValue, ICardBuilderColor, ICardBuilder {
        private ValueEnum value;
        private ColorEnum color;

        private Builder() {
        }

        public ICardBuilderColor withValue(ValueEnum val) {
            value = val;
            return this;
        }

        public ICardBuilder withColor(ColorEnum val) {
            color = val;
            return this;
        }

        public Card build() {
            return new Card(this);
        }
    }
}
