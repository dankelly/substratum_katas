var Closest = {
    toZero: function(array) {
        if (array.length === 0) throw "List must contain at least one value";

        array.sort(function(x, y){
            return (Math.abs(x) - Math.abs(y)) || (x > 0 ? -1 : 1);
        });

        return array[0];
    }
};
