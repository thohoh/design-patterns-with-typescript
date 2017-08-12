import { Beverage } from './beverage';

export abstract class CondimentDecorator extends Beverage {
    public beverage: Beverage;
    abstract getName(): string;
    abstract getPrice(): number;
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.setSize(this.beverage.getSize());
        this.setName('Mocha');
        this.setPrices(0.2, 0.5, 0.7);
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.getPriceBySize();
    }
}

export class Sugar extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.setSize(this.beverage.getSize());
        this.setName('Sugar');
        this.setPrices(0.2, 0.5, 0.7);
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.getPriceBySize();
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.setSize(this.beverage.getSize());
        this.setName('Whip');
        this.setPrices(0.2, 0.5, 0.7);
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.getPriceBySize();
    }
}