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

describe('A list containing several sets of duplicate values', function () {
    var input = [345, -512, 9, -9, -21, 21, -9, 21, 33, 33, 345, -512];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns positive 9", function(){
            expect(result).toBe(9);
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

describe('A bigger list containing two values equidistant from zero', function () {
    var input = [-1024, -383, -29, -7, 7, 5546];

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

describe('A list containing several positive, ascending values', function () {
    var input = [1, 1, 2, 3, 5, 8, 13, 21, 34];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns the first element", function(){
            expect(result).toBe(1);
        });
    });
});

describe('A list containing several positive, descending values', function () {
    var input = [34, 21, 13, 8, 5, 3, 2, 1, 1];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns the last element", function(){
            expect(result).toBe(1);
        });
    });
});

describe('A list containing several negative, decending values', function () {
    var input = [-1, -1, -2, -3, -5, -8, -13, -21, -34];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns the first element", function(){
            expect(result).toBe(-1);
        });
    });
});

describe('A list containing several negative, ascending values', function () {
    var input = [-34, -21, -13, -8, -5, -3, -2, -1, -1];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns the last element", function(){
            expect(result).toBe(-1);
        });
    });
});

describe('A list containing (almost) a textbook example', function () {
    var input = [ 2, 3, -1, -6, -108, 42, 10 ];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns -1", function(){
            expect(result).toBe(-1);
        });
    });
});

describe('A list containing an already sorted (textbook) example', function () {
    var input = [ -108, -6, -1, 2, 3, 10, 42 ];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns -1", function(){
            expect(result).toBe(-1);
        });
    });
});

describe('A list containing positive and negative zero values', function () {
    var input = [ -0, -16, -1, 0, 369, 1337, 42 ];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns zero", function(){
            expect(result).toBe(0);
        });
    });
});

describe('A list containing negative zero values', function () {
    var input = [ -0, -16, -1, -0, 369, 1337, 42 ];

    describe("searched for the element closest to zero", function(){
        var result = Closest.toZero(input);

        it("returns zero", function(){
            expect(result).toBe(0);
        });
    });
});