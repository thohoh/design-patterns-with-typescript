import { PizzaType } from '../simple-factory/pizza/pizza-type';
import { Pizza } from '../simple-factory/pizza/pizza';
import { IPizzaIngredientsFactory } from '../abstract-factory/pizza-ingredients-factory.interface';

export abstract class PizzaStore {
    ingredientsFactory: IPizzaIngredientsFactory;

    public orderPizza(type: PizzaType): Pizza {
        return this.createPizza(type);
    }

    // can be implemented by default
    abstract createPizza(type: PizzaType): Pizza;
}