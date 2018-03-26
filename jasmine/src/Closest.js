var Closest = {
    toZero: function(array) {
        if (array.length === 0) throw "List must contain at least one value";
        if(array.includes(0)) return 0;

        array.sort(function(x, y){
            if(Math.abs(x) < Math.abs(y)) return -1;
            if(Math.abs(y) < Math.abs(x)) return 1;
            return 0;
        });
        if(array[0] < 0 && array.includes(-array[0])) return -array[0];
        return array[0];
    }
};
