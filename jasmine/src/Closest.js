var Closest = {
    toZero: function(array){
        if(array.length === 0) throw "List must contain at least one value";

        if(array.includes(0)) return 0;
        else return array.pop();
    }
};
