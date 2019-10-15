class Ad {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }

    print() {
        console.log(`Ad Type: ${this.type} | Price: $${this.price}`)
    }
}