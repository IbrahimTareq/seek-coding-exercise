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

/***** *****/

const rules = [
    { name: 'SecondBite', shortName: 'SB', deals: [1] },
    { name: 'AxilCoffeeRoasters', shortName: 'ACR', deals: [2] },
    { name: 'MYER', shortName: 'MYER', deals: [3,4] }
];

const deals = [
    { 
        id: 1,
        name: '3 for 2 on Classic Ads', 
        evaluate : function() {}
    },
    { 
        id: 2,
        name: 'Standout Ads discount',
        evaluate : function() {}
    },
    { 
        id: 3, 
        name: '5 for 4 on Standout Ads',
        evaluate : function() {}
    },
    { 
        id: 4,
        name: 'Premium Ads discount',
        evaluate : function() {}
    }
];