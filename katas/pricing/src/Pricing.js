var Pricing = {

    priceItems: function(itemsFromUser){
        var itemsByCategory = {
            food: [0],
            alcohol: [0],
            other: [0]
        };

        function sum(integerArray){
            return integerArray.reduce( (accumulator, currentValue) => accumulator + currentValue );
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
