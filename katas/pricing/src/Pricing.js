var Pricing = {

    priceItems: function(submittedItems){

        var totalsByCategory = transformSubmittedItems(submittedItems);

        var discountedTotals = applyDiscounts(totalsByCategory);

        var taxedTotals = applyTaxes(discountedTotals);

        return Math.round(sum(extractTotals(taxedTotals)));

        function sum(integerArray){
            return integerArray.reduce( (accumulator, currentValue) => accumulator + currentValue );
        }

        function extractTotals(categoriesObject){
            return Object.values(categoriesObject).map(categoryProperties => categoryProperties.total);
        }

        function transformSubmittedItems(submittedItems){
            var categories = {
                food: {total: 0, taxRate: 0},
                alcohol: {total:0, taxRate: 0.155},
                other: {total: 0, taxRate: 0.075}
            };

            submittedItems.forEach(function(item){
                var listItem = Object.entries(item).pop();
                categories[listItem[0]].total += listItem[1];
            });

            return categories;
        }

        function applyDiscounts(categories){
            var discount = 0;
            var preDiscountTotal = sum(extractTotals(categories));

            if(preDiscountTotal >= 100000) discount = 0.15;
            else if(preDiscountTotal >= 10000) discount = 0.1;

            Object.entries(categories).forEach(function(pair){
                categories[pair[0]].total -= pair[1].total * discount;
            });

            return categories;
        }

        function applyTaxes(totalsByCategory){
            Object.entries(totalsByCategory).forEach(function(pair){
                totalsByCategory[pair[0]].total += pair[1].total *= pair[1].taxRate;
            });
            return totalsByCategory;
        }
    }

};
