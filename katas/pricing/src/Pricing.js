var Pricing = {

    priceItems: function(itemsFromUser){
        var itemsByCategory = {
            food: [],
            alcohol: [],
            other: []
        };

        function sum(integerArray){
            return integerArray.reduce(function(accumulator, currentValue, currentIndex, origArray){
                return accumulator + currentValue;
            }, 0) || 0;
        }

        itemsFromUser.forEach(function(item){
            var pair = Object.entries(item).pop();
            itemsByCategory[pair[0]].push(pair[1]);
        });

        return sum(Object.values(itemsByCategory).map(function(categoryItemPricesArray){
            return sum(categoryItemPricesArray);
        }));

    }

};
