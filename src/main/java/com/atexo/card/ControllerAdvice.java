package com.atexo.card;

import com.atexo.card.cards.exceptions.InvalidNumberOfCards;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class ControllerAdvice extends ResponseEntityExceptionHandler {

    @ExceptionHandler(InvalidNumberOfCards.class)
    protected ResponseEntity<Object> handleInvalidNumberOfCards(
            InvalidNumberOfCards ex, WebRequest request) {
        String bodyOfResponse = InvalidNumberOfCards.message;
        return new ResponseEntity<>(bodyOfResponse, HttpStatus.BAD_REQUEST);
    }

}
