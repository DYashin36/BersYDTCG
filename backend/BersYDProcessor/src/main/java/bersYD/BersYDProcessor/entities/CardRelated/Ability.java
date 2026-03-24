package bersYD.BersYDProcessor.entities.CardRelated;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class Ability {
    String name="";
    int range;
    boolean isContact;
}
