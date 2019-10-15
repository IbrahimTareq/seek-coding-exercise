const expect  = require('chai').expect;
const Ad = require('../Ad');
const Checkout = require('../Checkout');

describe('Validate prices and rules', () => {

    classicAd = new Ad("Classic", 269.99);
    standoutAd = new Ad("StandOut", 322.99);
    premiumAd = new Ad("Premium", 394.99);

    describe('3 for 2 Classic Ads validation', () => {
        it('validate price for 2 Classic Ads for SecondBite', () => {
            const order = new Checkout("SecondBite", [classicAd, classicAd]);
            const total = order.calculateTotal();

            expect(total).to.equal(539.98)
        });

        it('validate 3 for 2 on Classic Ads rule for SecondBite', () => {
            const order = new Checkout("SecondBite", [classicAd, classicAd, classicAd]);
            const total = order.calculateTotal();

            expect(total).to.equal(539.98)
        });
    });

    describe('Standout Ads discount validation', () => {
        it('validate price for a single Standout Ad for normal customer', () => {
            const order = new Checkout("Test", [standoutAd]);
            const total = order.calculateTotal();

            expect(total).to.equal(322.99)
        });

        it('validate price for a single Standout Ad for AxilCoffeeRoasters', () => {
            const order = new Checkout("AxilCoffeeRoasters", [standoutAd]);
            const total = order.calculateTotal();

            expect(total).to.equal(299.99)
        });
    });

    describe('5 for 4 on Standout Ads validation', () => {
        it('validate price for 4 Standout Ads for MYER', () => {
            const order = new Checkout("MYER", [standoutAd, standoutAd, standoutAd, standoutAd]);
            const total = order.calculateTotal();

            expect(total).to.equal(1291.96)
        });

        it('validate 5 for 4 on Standout Ads rule for MYER', () => {
            const order = new Checkout("MYER", [standoutAd, standoutAd, standoutAd, standoutAd, standoutAd]);
            const total = order.calculateTotal();

            expect(total).to.equal(1291.96)
        });
    });

    describe('Premium Ads discount validation', () => {
        it('validate price for a single Standout Ad for normal customer', () => {
            const order = new Checkout("Test", [premiumAd]);
            const total = order.calculateTotal();

            expect(total).to.equal(394.99)
        });

        it('validate price for a single Standout Ad for MYER', () => {
            const order = new Checkout("MYER", [premiumAd]);
            const total = order.calculateTotal();

            expect(total).to.equal(389.99)
        });
    });

});
