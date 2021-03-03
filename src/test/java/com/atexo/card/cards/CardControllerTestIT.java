package com.atexo.card.cards;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CardControllerTestIT {

    @LocalServerPort
    private int port;

    @Autowired
    private CardController cardController;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void randomColorOrderShouldReturnAllColorAnyOrder() {
        var response = restTemplate.getForEntity("http://localhost:" + port + "/cards/colorOrder", ColorEnum[].class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).containsExactlyInAnyOrder(ColorEnum.values());
    }

    @Test
    void randomValueOrderShouldReturnAllValuesAnyOrder() {
        var response = restTemplate.getForEntity("http://localhost:" + port + "/cards/valueOrder", ValueEnum[].class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).containsExactlyInAnyOrder(ValueEnum.values());
    }

    @Test
    void randomHandWithNoCardsShouldReturnBadRequest() {
        var response = restTemplate.getForEntity("http://localhost:" + port + "/cards?nbCards={nbCard}", String.class, 0);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
        assertThat(response.getBody()).isEqualTo("You requested a hand with no cards or more cards than contained in the deck");
    }

    @Test
    void randomHandWithTooManyCardsShouldReturnBadRequest() {
        var response = restTemplate.getForEntity("http://localhost:" + port + "/cards?nbCards={nbCard}", String.class, 150);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
        assertThat(response.getBody()).isEqualTo("You requested a hand with no cards or more cards than contained in the deck");
    }

    @Test
    void randomHandWithCorrectNumberCardsShouldReturnNoDuplicatedCards() {
        var response = restTemplate.getForEntity("http://localhost:" + port + "/cards?nbCards={nbCard}", Card[].class, 20);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).doesNotHaveDuplicates();
    }
}