/**
 Test-drive a method or function to accept a list of integers and return the one that is closest to zero.

 It should be an error for the list to be empty.

 If two different numbers tie for distance from zero (for example, 2 and -2), always return the positive one.
 */
describe('A list containing just one value', function () {
    var input = [-10];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns that one value", function(){
            expect(result).toBe(-10);
        });
    });
});

describe('An empty list', function () {
    var input = [];

    describe("searched for the element closest to zero", function(){
        var result = function(){ Closest.toZero(input); };

        it("throws an exception", function(){
            expect(result).toThrow("List must contain at least one value");
        });
    });
});

describe('A list containing two values equidistant from zero', function () {
    var input = [-7, 7];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns the positive value", function(){
            expect(result).toBe(7);
        });
    });
});

describe('A list containing two values, one of which is zero', function () {
    var input = [0, 7];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns zero", function(){
            expect(result).toBe(0);
        });
    });
});
