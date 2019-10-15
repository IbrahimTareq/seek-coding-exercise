const Ad = require('./Ad');
const Checkout = require('./Checkout');

classicAd = new Ad("Classic", 269.99);
standoutAd = new Ad("StandOut", 322.99);
premiumAd = new Ad("Premium", 394.99);

order = new Checkout("SecondBite", [classicAd, classicAd, classicAd, standoutAd]);
order.calculateTotal();