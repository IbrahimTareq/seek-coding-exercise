const _ = require('lodash');

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
    { name: 'MYER', shortName: 'MYER', deals: [3, 4] }
];

const deals = [
    { 
        id: 1,
        name: '3 for 2 on Classic Ads', 
        evaluate : function(ads, total) { 
            const CLASSIC_AD_PRICE = 269.99;
            const numOfAds = _.filter(ads, {type: 'Classic'});
            /* Number of times to apply discount */
            const times = Math.floor(numOfAds.length / 3);
            return total - (times * CLASSIC_AD_PRICE);
        }
    },
    { 
        id: 2,
        name: 'Standout Ads discount',
        evaluate : function(ads, total) { 
            /* The difference between the actual price and the discounted price */
            const DISCOUNT_DIFFERENCE = 23;
            const numOfAds = _.filter(ads, {type: 'StandOut'});
            /* Number of times to apply discount */
            const times = numOfAds.length;
            return total - (times * DISCOUNT_DIFFERENCE);
        }
    },
    { 
        id: 3, 
        name: '5 for 4 on Standout Ads',
        evaluate : function(ads, total) { 
            const STANDOUT_AD_PRICE = 322.99;
            const numOfAds = _.filter(ads, {type: 'StandOut'});
            /* Number of times to apply discount */
            const times = Math.floor(numOfAds.length / 5);
            return total - (times * STANDOUT_AD_PRICE);
        }
    },
    { 
        id: 4,
        name: 'Premium Ads discount',
        evaluate : function(ads, total) { 
            /* The difference between the actual price and the discounted price */
            const DISCOUNT_DIFFERENCE = 5;
            const numOfAds = _.filter(ads, {type: 'Premium'});
            /* Number of times to apply discount */
            const times = numOfAds.length;
            return total - (times * DISCOUNT_DIFFERENCE);
        }
    }
];

class Checkout {
    constructor(name, ads) {
        this.name = name;
        this.ads = ads;
    }

    calculateTotal() {
        let obj, tempTotal;
        let total = 0; 

        this.ads.forEach(ad => {
            total = total + ad.price;
        })

        console.log("Total without deals: ", total)

        rules.forEach(rule => {
            if (rule.name === this.name && rule.deals.length > 0) {
                rule.deals.forEach(deal => {
                    switch(deal) {
                        case 1:
                          // 3 for 2 on Classic Ads
                          obj = _.find(deals, {id: 1});
                          tempTotal = obj.evaluate(this.ads, total)
                          total = tempTotal;
                          break;
                        case 2:
                          // Standout Ads discount
                          obj = _.find(deals, {id: 2});
                          tempTotal = obj.evaluate(this.ads, total)
                          total = tempTotal;
                          break;
                        case 3:
                          // 5 for 4 on Standout Ads
                          obj = _.find(deals, {id: 3});
                          tempTotal = obj.evaluate(this.ads, total)
                          total = tempTotal;
                          break;
                        case 4:
                          // Premium Ads discount
                          obj = _.find(deals, {id: 4});
                          tempTotal = obj.evaluate(this.ads, total)
                          total = tempTotal;
                          break;
                        default:
                          console.log("Deal type not found")
                    }
                })
            }
        })

        console.log("----------")
        console.log("Customer: ", this.name);
        console.log("Items: ", _.map(this.ads, 'type'));
        console.log("Total: $" + total);
        return total;
    }

    printAds() {
        this.ads.forEach(ad => {
            console.log(`Ad Type: ${ad.type}`)
        });
    }
}

order = new Checkout("SecondBite", [classicAd, classicAd, classicAd, standoutAd]);
order.calculateTotal();