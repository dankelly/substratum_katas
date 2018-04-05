var Triangles = {

    EQUILATERAL: "equilateral",
    ISOSCELES: "isosceles",
    RIGHT: "right",
    OTHER: "other",
    NOT_A_TRIANGLE: "not a triangle",

    classifySegments: function(a, b, c){
        var results = [];
        [a, b, c] = [a, b, c].sort((x, y) => x - y);
        if(a + b <= c) results.push(Triangles.NOT_A_TRIANGLE);
        if(a === b && b === c) results.push(Triangles.EQUILATERAL);
        if(a === b || b === c) results.push(Triangles.ISOSCELES);
        if(a*a + b*b === Triangles.squareWithPrecision(c, 9)) results.push(Triangles.RIGHT);
        if(results.length === 0) results.push(Triangles.OTHER);
        return results;
    },

    squareWithPrecision: function(length, decimalPlaces){
        return parseFloat((length*length).toFixed(decimalPlaces));
    },


    customMatchers: {
        toBeEquilateral: function(){
            return Triangles.customMatchers.baseCompareFunction(Triangles.EQUILATERAL,
                "Expected line segments not to form an equilateral triangle",
                "Expected line segments to form an equilateral triangle");
        },
        toBeIsosceles: function(){
            return Triangles.customMatchers.baseCompareFunction(Triangles.ISOSCELES,
                "Expected line segments not to form an isosceles triangle",
                "Expected line segments to form an isosceles triangle");
        },
        toBeRight: function(){
            return Triangles.customMatchers.baseCompareFunction(Triangles.RIGHT,
                "Expected line segments not to form a right triangle",
                "Expected line segments to form a right triangle");
        },
        toBeOtherTriangle: function(){
            return Triangles.customMatchers.baseCompareFunction(Triangles.OTHER,
                "Expected line segments not to form a triangle which is not equilateral nor isosceles nor right",
                "Expected line segments to form a triangle which is not equilateral nor isosceles nor right");
        },
        toNotBeTriangluar: function(){
            return Triangles.customMatchers.baseCompareFunction(Triangles.NOT_A_TRIANGLE,
                "Expected line segments to form some kind of triangle",
                "Expected line segments not to form some kind of triangle");
        },
        baseCompareFunction: function(triangleType, negativeExpectationMsg, positiveExpectationMsg){
            return {
                compare: function(actual){
                    var result = {};
                    result.pass = actual.includes(triangleType);
                    if(result.pass) result.message = negativeExpectationMsg;
                    else result.message = positiveExpectationMsg;
                    return result;
                }
            };
        }
    }

};
