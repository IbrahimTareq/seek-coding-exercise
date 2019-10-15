const _ = require('lodash');
const { rules, deals } = require('./data');

module.exports = class Checkout {
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
                          // Deal Type: 3 for 2 on Classic Ads
                          obj = _.find(deals, {id: 1});
                          tempTotal = obj.evaluate(this.ads, total)
                          total = tempTotal;
                          break;
                        case 2:
                          // Deal Type: Standout Ads discount
                          obj = _.find(deals, {id: 2});
                          tempTotal = obj.evaluate(this.ads, total)
                          total = tempTotal;
                          break;
                        case 3:
                          // Deal Type: 5 for 4 on Standout Ads
                          obj = _.find(deals, {id: 3});
                          tempTotal = obj.evaluate(this.ads, total)
                          total = tempTotal;
                          break;
                        case 4:
                          // Deal Type: Premium Ads discount
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