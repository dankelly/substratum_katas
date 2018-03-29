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
        var result = Pricing.priceItems( [ {food: 500}, {food: 1500} ] );
        it("costs $20.00", function(){
            expect(result).toBe(2000);
        });
    });

    describe("$99.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 3300}, {food: 3300}, {food: 3300} ] );
        it("costs $99.00", function(){
            expect(result).toBe(9900);
        });
    });

    describe("$100.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 10000} ] );
        it("costs $90.00", function(){
            expect(result).toBe(9000);
        });
    });

    describe("$999.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 10000}, {food: 10000}, {food: 10000}, {food: 10000}, {food: 10000},
                                           {food: 10000}, {food: 10000}, {food: 10000}, {food: 10000},
                                           {food: 9000}, {food: 900} ] );
        it("costs $899.10", function(){
            expect(result).toBe(89910);
        });
    });

    describe("$1000.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 10000}, {food: 10000}, {food: 10000}, {food: 10000}, {food: 10000},
                                           {food: 10000}, {food: 10000}, {food: 10000}, {food: 10000},
                                           {food: 9500}, {food: 500} ] );
        it("costs $850.00", function(){
            expect(result).toBe(85000);
        });
    });

    describe("$9843.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 300}, {food: 4000}, {food: 80000}, {food: 900000} ] );
        it("costs $8366.55", function(){
            expect(result).toBe(836655);
        });
    });

    /***************************************************/

    describe("$20.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 500}, {alcohol: 1500} ] );
        it("costs $23.10", function(){
            expect(result).toBe(2310);
        });
    });

    describe("$99.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 3300}, {alcohol: 3300}, {alcohol: 3300} ] );
        it("costs $114.35", function(){
            expect(result).toBe(11435);
        });
    });

    describe("$100.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 10000} ] );
        it("costs $103.95", function(){
            expect(result).toBe(10395);
        });
    });

    describe("$999.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000},
                                           {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000},
                                           {alcohol: 9000}, {alcohol: 900} ] );
        it("costs $1038.46", function(){
            expect(result).toBe(103846);
        });
    });

    describe("$1000.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000},
                                           {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000}, {alcohol: 10000},
                                           {alcohol: 9500}, {alcohol: 500} ] );
        it("costs $981.75", function(){
            expect(result).toBe(98175);
        });
    });

    describe("$9843.00 worth of alcohol", function(){
        var result = Pricing.priceItems( [ {alcohol: 300}, {alcohol: 4000}, {alcohol: 80000}, {alcohol: 900000} ] );
        it("costs $9663.37", function(){
            expect(result).toBe(966337);
        });
    });

    /***************************************************/

    describe("$20.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 500}, {other: 1500} ] );
        it("costs $21.50", function(){
            expect(result).toBe(2150);
        });
    });

    describe("$99.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 3300}, {other: 3300}, {other: 3300} ] );
        it("costs $106.43", function(){
            expect(result).toBe(10643);
        });
    });

    describe("$100.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 10000} ] );
        it("costs $96.75", function(){
            expect(result).toBe(9675);
        });
    });

    describe("$999.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 10000}, {other: 10000}, {other: 10000}, {other: 10000}, {other: 10000},
                                           {other: 10000}, {other: 10000}, {other: 10000}, {other: 10000},
                                           {other: 9000}, {other: 900} ] );
        it("costs $966.53", function(){
            expect(result).toBe(96653);
        });
    });

    describe("$1000.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 10000}, {other: 10000}, {other: 10000}, {other: 10000}, {other: 10000},
                                           {other: 10000}, {other: 10000}, {other: 10000}, {other: 10000},
                                           {other: 9500}, {other: 500} ] );
        it("costs $913.75", function(){
            expect(result).toBe(91375);
        });
    });

    describe("$9843.00 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {other: 300}, {other: 4000}, {other: 80000}, {other: 900000} ] );
        it("costs $8994.04", function(){
            expect(result).toBe(899404);
        });
    });

    /***************************************************/

    describe("$77.31 worth of food, $12.34 worth of alcohol, and $7.85 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {food:  730}, {alcohol: 512}, {other: 700},
                                           {food: 4001}, {alcohol: 420}, {other:  80},
                                           {food: 3000}, {alcohol: 302}, {other:   5} ] );
        it("costs $100.00", function(){
            expect(result).toBe(10000);
        });
    });

    describe("$78.14 worth of food, $13.17 worth of alcohol, and $8.68 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {food: 7004}, {alcohol:  111}, {other: 800},
                                           {food:  800}, {alcohol: 1106}, {other:  60},
                                           {food:   10}, {alcohol:  100}, {other:   8} ] );
        it("costs $102.68", function(){
            expect(result).toBe(10268);
        });
    });

    describe("$78.14 worth of food, $13.17 worth of alcohol, and $8.69 worth of other merchandise", function(){
        var result = Pricing.priceItems( [ {food: 7004}, {alcohol:  111}, {other: 801},
                                           {food:  800}, {alcohol: 1106}, {other:  60},
                                           {food:   10}, {alcohol:  100}, {other:   8} ] );
        it("costs $92.42", function(){
            expect(result).toBe(9242);
        });
    });

    /***************************************************/

    describe("$20.00 worth of food", function(){
        var result = Pricing.priceItems( [ {food: 500}, {food: 1500} ] );
        it("costs $20.00", function(){
            expect(result).toBe(2000);
        });
    });

});
