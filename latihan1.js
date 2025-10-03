class FruitBasket {
    constructor() {
        this.fruitsBasket = [];
    }

    addItem(fruit) {
        this.fruitsBasket.push(fruit);
    }

    removeLastItem() {
        this.fruitsBasket.pop();
    }

    getInformation() {
        return this.fruitsBasket;
    }
}

const myBasket = new FruitBasket();

myBasket.addItem("Apel");
myBasket.addItem("Mangga");
myBasket.addItem("Pisang");

console.log(myBasket.getInformation());

myBasket.removeLastItem();

console.log(myBasket.getInformation());
