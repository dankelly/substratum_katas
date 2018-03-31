var Pricing = {

    priceItems: function(submittedItems){

        var categorizedInput = transformInput(submittedItems);

        var discountedCategories = applyDiscounts(categorizedInput);

        var taxedCategories = applyTaxes(discountedCategories);

        return Math.round(sum(extractTotals(taxedCategories)));

        function sum(integerArray){
            return integerArray.reduce( (accumulator, currentValue) => accumulator + currentValue );
        }

        function extractTotals(categoriesObject){
            return Object.values(categoriesObject).map(categoryProperties => categoryProperties.total);
        }

        function transformInput(submittedItems){
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

        function applyDiscounts(categorizedInput){
            var discountedCategories = JSON.parse(JSON.stringify(categorizedInput));
            var discount = 0;
            var preDiscountTotal = sum(extractTotals(discountedCategories));

            if(preDiscountTotal >= 100000) discount = 0.15;
            else if(preDiscountTotal >= 10000) discount = 0.1;

            Object.entries(discountedCategories).forEach(function(pair){
                discountedCategories[pair[0]].total -= pair[1].total * discount;
            });

            return discountedCategories;
        }

        function applyTaxes(discountedCategories){
            var taxedCategories = JSON.parse(JSON.stringify(discountedCategories));
            Object.entries(taxedCategories).forEach(function(pair){
                taxedCategories[pair[0]].total += pair[1].total *= pair[1].taxRate;
            });
            return taxedCategories;
        }
    }

};
