package bersYD.BersYDProcessor.entities.CardRelated;

import java.util.List;

public abstract class Card {
    Long id;
    String setId;
    String name;
    CardClass cardClass;
    CardElement cardElement;
    int hitPoints;
    int movements;
    int[] hitsPower;
    boolean isUnique;

    boolean isOpen;

    List<Action> actions;
    List<Ability> abilities;
}
