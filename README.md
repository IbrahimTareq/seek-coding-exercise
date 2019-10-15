# Coding exercise for Seek

## Starting the app

To start up the app, run `yarn start`

The index.js is the entry path for the app. An example has been included in the file which looks like this:
`
order = new Checkout("SecondBite", [classicAd, classicAd, classicAd, standoutAd]);  
`
`
order.calculateTotal();
`

The Checkout instance takes in two arguments - customer name and an array of ad types. Here's another
example of what it could look like: 
`
order = new Checkout("Test", [classicAd, standoutAd, premiumAd]);  
`
`
order.calculateTotal();
`

## Testing the app

To run the unit tests for the app, run `yarn test`
