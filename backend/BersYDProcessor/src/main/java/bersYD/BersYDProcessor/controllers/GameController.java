package bersYD.BersYDProcessor.controllers;

import org.springframework.web.bind.annotation.RestController;

import bersYD.BersYDProcessor.Cards.PaladinBratstva;
import bersYD.BersYDProcessor.entities.CardRelated.Card;
import bersYD.BersYDProcessor.entities.GameRelated.Game;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/game")
@CrossOrigin(origins = "http://localhost:4200")
public class GameController {
    @GetMapping("/getStartField")
    public Game getMethodName() {
        Game start = new Game();
        Card[][] field = start.getField();
        field[3][3]=new PaladinBratstva();
        field[2][3]=new PaladinBratstva();
        start.setField(field);
        return start;
    }

    //@PostMapping
}
