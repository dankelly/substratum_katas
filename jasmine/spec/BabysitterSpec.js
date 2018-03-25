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

describe("A babysitter", function() {

    describe("who watches children for two hours before bedtime", function () {
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(6, 8, 9);
         it("costs $20", function(){
            expect(result).toBe(20);
        });
    });

    describe("who watches children for three hours right up until bedtime", function () {
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(6, 9, 9);
        it("costs $30", function(){
            expect(result).toBe(30);
        });
    });

    describe("who arrives at 9pm bedtime and stays until midnight", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(9, 12, 9);
        it("costs $18", function(){
            expect(result).toBe(18);
        });
    });

    describe("who arrives at midnight and stays until 4am", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(12, 4, 5);
        it("costs $32", function(){
            expect(result).toBe(32);
        });
    });

    describe("who watches children for three hours before bedtime and stays one hour after pre-midnight bedtime", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(7, 11, 10);
        it("costs $36", function(){
            expect(result).toBe(36);
        });
    });

    describe("who watches children for one hour before midnight bedtime and stays four hours after midnight", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(11, 4, 12);
        it("costs $42", function(){
            expect(result).toBe(42);
        });
    });

    describe("who watches children for four hours before bedtime and stays one hour after pre-midnight bedtime and 2 hours after midnight", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(7, 2, 11);
        it("costs $62", function(){
            expect(result).toBe(62);
        });
    });

    describe("who arrives at the earliest possible time, puts kids to bed an hour later, and stays until the latest possible time", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(5, 4, 6);
        it("costs $78", function(){
            expect(result).toBe(78);
        });
    });

    describe("who watches children for six hours before midnight bedtime and leaves at 3am", function(){
        var babysitter = new Babysitter();
        var result = babysitter.calculatePay(6, 3, 12);
        it("costs $84", function(){
            expect(result).toBe(84);
        });
    });

});
