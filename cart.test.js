const cart = require('./cart')
const cars = require('./data/cars.js')

describe('Cart Properties:', () => {
    test('Cart should default to an empty array.', () => {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    })

    test('Total should be 0.', () => {
        expect(cart.total).toEqual(0)
    })
});

describe('Cart Methods:', () => {
    afterEach(function () {
        cart.cart = [];
        cart.total = 0;
    });

    test('Should add a car object to the cart array.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);


        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);

    });

    test('Should increase the total.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        expect(cart.total).toEqual(cars[0].price + cars[8].price + cars[2].price);
    });

    test('Should remove a car object from cart.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(1, cars[1].price);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[2]);

    });

    test('Should decrease total.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(0, cars[0].price);
        cart.removeFromCart(1, cars[2].price);

        expect(cart.total).toEqual(cars[8].price);
    });

    test('Should have an empty array'), () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[5]);
        cart.addToCart(cars[4]);
        cart.addToCart(cars[3]);
        cart.addToCart(cars[2]);

        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);

    }
})