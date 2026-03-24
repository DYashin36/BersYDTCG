package bersYD.BersYDProcessor.actions;

import bersYD.BersYDProcessor.entities.CardRelated.Action;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class PU extends Action{
    String name = "Простой удар";
    int[] power;

    public PU(int[] power){
        this.power=power;
    }
}
