package bersYD.BersYDProcessor.abilities;

import bersYD.BersYDProcessor.entities.CardRelated.Ability;

public class Movement extends Ability {
    String name="Движение";
    int range;
    boolean isContact=false;

    public Movement(int range){
        this.range=range;
    }
    public Movement(int range,boolean isContact){
        this.isContact=isContact;
    }
}
