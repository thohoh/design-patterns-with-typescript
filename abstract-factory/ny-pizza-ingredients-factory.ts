import { IPizzaIngredientsFactory } from './pizza-ingredients-factory.interface';
import { ThinDough } from '../simple-factory/pizza-ingredients/thin-dough';
import { Sauce2 } from '../simple-factory/pizza-ingredients/sauce2';
import { Veggies1 } from '../simple-factory/pizza-ingredients/veggies1';
import { Cheese2 } from '../simple-factory/pizza-ingredients/cheese2';

export class NYPizzaIngredientsFactory implements IPizzaIngredientsFactory {
    public createDough(): any { return new ThinDough(); }
    public createSauce(): any { return new Sauce2(); }
    public createVeggies(): any[] { return <any>[]> new Veggies1(); }
    public createCheese(): any { return new Cheese2(); }
}