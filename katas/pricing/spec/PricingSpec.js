/**
 A store has the following pricing policy:
 1. Buy less than $100 worth of merchandise and pay the full price.
 2. Buy $100 or more, but less than $1000, and get 10% off.
 3. Buy $1000 or more, and get 15% off.
 According to the laws governing the store, the following taxes apply:
 Food: no tax.
 Alcohol: 7.5% sales tax + 8% "sin" tax.
 All other merchandise: 7.5% sales tax.
 Discounts are calculated on sticker prices; taxes are calculated on discounted prices.
 Using TDD, write a method that will accept purchased items of food, alcohol, and other, and will
 return the price the customer should be charged.
 */

describe("A purchase consisting of:", function() {
    // code common to all scenarios

    describe("$20.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 5}, {food: 15} ] );
        it("costs $20.00", function(){
            expect(result).toBe(20);
        });
    });

    describe("$99.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 33}, {food: 33}, {food: 33} ] );
        it("costs $99.00", function(){
            expect(result).toBe(99);
        });
    });

    describe("$100.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 100} ] );
        it("costs $90.00", function(){
            expect(result).toBe(90);
        });
    });

    describe("$999.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 100}, {food: 100}, {food: 100}, {food: 100}, {food: 100},
                                           {food: 100}, {food: 100}, {food: 100}, {food: 100},
                                           {food: 90}, {food: 9} ] );
        it("costs $899.10", function(){
            expect(result).toBe(899.1);
        });
    });

    describe("$1000.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 100}, {food: 100}, {food: 100}, {food: 100}, {food: 100},
                                           {food: 100}, {food: 100}, {food: 100}, {food: 100},
                                           {food: 95}, {food: 5} ] );
        it("costs $850.00", function(){
            expect(result).toBe(850);
        });
    });

    describe("$9843.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 3}, {food: 40}, {food: 800}, {food: 9000} ] );
        it("costs $8366.55", function(){
            expect(result).toBe(8366.55);
        });
    });

    /***************************************************/

    describe("$20.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 5}, {alcohol: 15} ] );
        it("costs $23.10", function(){
            expect(result).toBe(23.1);
        });
    });

    describe("$99.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 33}, {alcohol: 33}, {alcohol: 33} ] );
        it("costs $114.35", function(){
            expect(result).toBe(114.35);
        });
    });

    describe("$100.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 100} ] );
        it("costs $103.95", function(){
            expect(result).toBe(103.95);
        });
    });

    describe("$999.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 100}, {alcohol: 100}, {alcohol: 100}, {alcohol: 100}, {alcohol: 100},
                                           {alcohol: 100}, {alcohol: 100}, {alcohol: 100}, {alcohol: 100},
                                           {alcohol: 90}, {alcohol: 9} ] );
        it("costs $1038.46", function(){
            expect(result).toBe(1038.46);
        });
    });

    describe("$1000.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 100}, {alcohol: 100}, {alcohol: 100}, {alcohol: 100}, {alcohol: 100},
                                           {alcohol: 100}, {alcohol: 100}, {alcohol: 100}, {alcohol: 100},
                                           {alcohol: 95}, {alcohol: 5} ] );
        it("costs $981.75", function(){
            expect(result).toBe(981.75);
        });
    });

    describe("$9843.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 3}, {alcohol: 40}, {alcohol: 800}, {alcohol: 9000} ] );
        it("costs $9663.37", function(){
            expect(result).toBe(9663.37);
        });
    });

    /***************************************************/

    describe("$20.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 5}, {other: 15} ] );
        it("costs $21.50", function(){
            expect(result).toBe(21.5);
        });
    });

    describe("$99.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 33}, {other: 33}, {other: 33} ] );
        it("costs $106.43", function(){
            expect(result).toBe(106.43);
        });
    });

    describe("$100.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 100} ] );
        it("costs $96.75", function(){
            expect(result).toBe(96.75);
        });
    });

    describe("$999.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 100}, {other: 100}, {other: 100}, {other: 100}, {other: 100},
                                           {other: 100}, {other: 100}, {other: 100}, {other: 100},
                                           {other: 90}, {other: 9} ] );
        it("costs $966.53", function(){
            expect(result).toBe(966.53);
        });
    });

    describe("$1000.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 100}, {other: 100}, {other: 100}, {other: 100}, {other: 100},
                                           {other: 100}, {other: 100}, {other: 100}, {other: 100},
                                           {other: 95}, {other: 5} ] );
        it("costs $913.75", function(){
            expect(result).toBe(913.75);
        });
    });

    describe("$9843.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 3}, {other: 40}, {other: 800}, {other: 9000} ] );
        it("costs $8994.04", function(){
            expect(result).toBe(8994.04);
        });
    });

    /***************************************************/

    describe("$74.99 worth of food, $12.99 worth of alcohol, and $5.05 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {food: 74.99}, {alcohol: 12.99}, {other: 5.05} ] );
        it("costs $95.42", function(){
            expect(result).toBe(95.42);
        });
    });

    /***************************************************/

    describe("$20.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 5}, {food: 15} ] );
        it("costs $20.00", function(){
            expect(result).toBe(20);
        });
    });

});
