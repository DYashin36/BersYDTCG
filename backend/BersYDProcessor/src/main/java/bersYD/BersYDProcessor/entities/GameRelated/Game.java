package bersYD.BersYDProcessor.entities.GameRelated;

import java.util.ArrayList;
import java.util.List;

import bersYD.BersYDProcessor.entities.CardRelated.Card;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "game")
@Getter
@Setter
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long firstPlayerId;
    private Long secondPlayerId;

    @Column(columnDefinition = "jsonb")
    private String state; // тут хранится GameState в JSON
}
