package bersYD.BersYDProcessor.Cards;

import java.util.ArrayList;
import java.util.List;

import bersYD.BersYDProcessor.abilities.Movement;
import bersYD.BersYDProcessor.actions.PU;
import bersYD.BersYDProcessor.entities.CardRelated.Ability;
import bersYD.BersYDProcessor.entities.CardRelated.Action;
import bersYD.BersYDProcessor.entities.CardRelated.Card;
import bersYD.BersYDProcessor.entities.CardRelated.CardClass;
import bersYD.BersYDProcessor.entities.CardRelated.CardElement;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class PaladinBratstva extends Card{
    String setId = "7_14";
    String name = "Паладин Братства";
    CardClass cardClass = CardClass.БРАТСТВО;
    CardElement cardElement = CardElement.СТЕПИ;
    int hitPoints = 11;
    int movements = 1;
    int[] hitsPower = new int[] {2,3,4};
    boolean isUnique = false;
    boolean isOpen=true;

    List<Action> actions = new ArrayList<>();
    {
        actions.add(new PU(hitsPower));
    }
    List<Ability> abilities = new ArrayList<>();
    {
        abilities.add(new Movement(movements));
    }
}
