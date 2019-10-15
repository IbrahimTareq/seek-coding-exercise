class Ad {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }

    print() {
        console.log(`Ad Type: ${this.type} | Price: $${this.price}`)
    }
}

classicAd = new Ad("Classic", 269.99);
standoutAd = new Ad("StandOut", 322.99);
premiumAd = new Ad("Premium", 394.99);