/**
 Using TDD, write a method or function that accepts three numbers as the lengths of three line segments.
 Determine computationally which of the following cases are true:
 The three segments
 (a) Can be joined into an equilateral triangle. (example: 3, 3, 3)
 (b) Can be joined into an isosceles triangle. (example: 5, 5, 3);
 (c) Can be joined into a right triangle. (example: 3, 4, 5);
 (d) Can only be joined into a triangle that is not one of the preceding cases. (example: 2, 3, 4)
 (e) Cannot be made into a triangle. (example: 2, 2, 5) [Warning: might look isosceles at first glance.]
 */

describe("A set of line segments containing", function() {
    const EQUILATERAL = [5, 5, 5],
        ISOSCELES = [7, 7, 3],
        RIGHT = [5, 4, 3],
        ISOSCELES_AND_RIGHT = [11, 15.55634918610405, 11],
        OTHER = [2, 4, 3],
        NON_TRIANGLE = [5, 5, 17];

    beforeEach(function() {
        jasmine.addMatchers(Triangles.customMatchers);
    });

    describe("three equal segments", function(){
        var result = Triangles.classifySegments(...EQUILATERAL);
        it("forms an equilateral triangle", function(){
            expect(result).toBeEquilateral();
        });
    });

    describe("three equal segments", function(){
        var result = Triangles.classifySegments(...EQUILATERAL);
        it("do not form an isosceles triangle", function(){
            expect(result).not.toBeIsosceles();
        });
    });

    describe("two equal segments and a 3rd segment much larger than than either of them", function(){
        var result = Triangles.classifySegments(...NON_TRIANGLE);
        it("cannot form a triangle", function(){
            expect(result).toNotBeTriangluar();
        });
    });

    describe("two equal segments and a 3rd segment smaller than either of them", function(){
        var result = Triangles.classifySegments(...ISOSCELES);
        it("forms an isosceles triangle", function(){
            expect(result).toBeIsosceles();
        });
    });

    describe("three unequal lengths, with the sum of the squares of the shorter 2 segments equal to the square of the third", function(){
        var result = Triangles.classifySegments(...RIGHT);
        it("forms a right triangle", function(){
            expect(result).toBeRight();
        });
    });

    describe("two equal lengths, with the sum of the squares of the shorter 2 segments equal to the square of the third", function(){
        var result = Triangles.classifySegments(...ISOSCELES_AND_RIGHT);
        it("forms an isosceles triangle", function(){
            expect(result).toBeIsosceles();
        });
    });

    describe("two equal lengths, with the sum of the squares of the shorter 2 segments equal to the square of the third", function(){
        var result = Triangles.classifySegments(...ISOSCELES_AND_RIGHT);
        it("forms a right triangle", function(){
            expect(result).toBeRight();
        });
    });

    describe("three segments which form a triangle which is not equilateral nor isosceles nor right", function(){
        var result = Triangles.classifySegments(...OTHER);
        it("forms a triangle which is not equilateral nor isosceles nor right", function(){
            expect(result).toBeOtherTriangle();
        });
    });

});
