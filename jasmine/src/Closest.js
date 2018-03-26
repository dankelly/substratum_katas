var Closest = {
    toZero: function(array) {
        if (array.length === 0) throw "List must contain at least one value";
        if(array.includes(0)) return 0;

        array.sort(function(x, y){
            if(x < y) return -1;
            if(y < x) return 1;
            return 0;
        });

        var negativeCandidate, positiveCandidate, previousCandidate,
            negativeIndex = 0,
            positiveIndex = array.length - 1;

        if (array[negativeIndex] < 0) {
            negativeCandidate = array[negativeIndex];
            negativeIndex += 1;
            while (negativeCandidate < 0 && array[negativeIndex]) {
                previousCandidate = negativeCandidate;
                negativeCandidate = array[negativeIndex];
                negativeIndex += 1;
            }
            if(array.length > 1) negativeCandidate = previousCandidate;
            previousCandidate = undefined;
        }

        if(array[positiveIndex] > 0){
            positiveCandidate = array[positiveIndex];
            positiveIndex -= 1;
            while (positiveCandidate > 0 && array[positiveIndex]) {
                previousCandidate = positiveCandidate;
                positiveCandidate = array[positiveIndex];
                positiveIndex -= 1;
            }
            if(array.length > 1) positiveCandidate = previousCandidate;
            previousCandidate = undefined;
        }

        if(!negativeCandidate) return positiveCandidate;
        if(!positiveCandidate) return negativeCandidate;

        var negativeDistanceFromZero = 0 - negativeCandidate;
        var positiveDistanceFromZero = positiveCandidate - 0;

        if(negativeDistanceFromZero < positiveDistanceFromZero) return negativeCandidate;
        return positiveCandidate;

    }
};
