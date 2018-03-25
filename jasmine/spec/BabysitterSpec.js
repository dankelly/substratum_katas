/**
 A babysitter has the following pay schedule:
 $10/hr to look after children before their bedtime
 $6/hr to house-sit after bedtime
 $8/hr after midnight when work causes her to lose sleep.

 Write a method or function that will accept an arrival time, a departure time, and a bedtime, and return
 the babysitter's earnings for the evening in dollars.

 Represent the times as integers on a 12-hour clock.  The earliest the babysitter can arrive is 5pm;
 the latest she can stay is 4am.
 */

describe("Babysitter", function() {

    describe("watches children for two hours before bedtime", function () {
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(6, 8, 9);
         it("costs $20", function(){
            expect(result).toBe(20);
        });
    });

    describe("arrives at 5 and watches children until bedtime at 8", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(5, 8, 8);
        it("costs $30", function(){
            expect(result).toBe(30);
        });
    });

    describe("arrives at 8, leaves at 2am, bedtime was 10", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(8, 2, 10);
        it("costs $48", function(){
            expect(result).toBe(48);
        });
    });

    describe("arrives at 6, leaves at 3am, bedtime was midnight", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(6, 3, 12);
        it("costs $84", function(){
            expect(result).toBe(84);
        });
    });

});
