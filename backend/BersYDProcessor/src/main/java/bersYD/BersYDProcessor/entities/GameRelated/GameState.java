package bersYD.BersYDProcessor.entities.GameRelated;

import lombok.Data;
import java.util.ArrayList;
import java.util.List;
import bersYD.BersYDProcessor.entities.CardRelated.Card;

@Data
public class GameState {

    private Card[][] field = new Card[6][5];

    private List<Card> flyZoneFirstPlayer = new ArrayList<>();
    private List<Card> flyZoneSecondPlayer = new ArrayList<>();

    private List<Card> graveFirstPlayer = new ArrayList<>();
    private List<Card> graveSecondPlayer = new ArrayList<>();
}
