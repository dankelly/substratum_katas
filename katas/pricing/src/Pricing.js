var Pricing = {

    priceItems: function(submittedItems){

        var totalsByCategory = transformSubmittedItems(submittedItems);

        var discountedTotals = applyDiscounts(totalsByCategory);

        var taxedTotals = applyTaxes(discountedTotals);

        return sum(Object.values(taxedTotals).map(roundToPennies));


        function sum(integerArray){
            return integerArray.reduce( (accumulator, currentValue) => accumulator + currentValue );
        }

        function transformSubmittedItems(submittedItems){
            var totalsByCategory = {
                food: 0,
                alcohol: 0,
                other: 0
            };

            submittedItems.forEach(function(item){
                var pair = Object.entries(item).pop();
                totalsByCategory[pair[0]] += pair[1];
            });

            return totalsByCategory;
        }

        function applyDiscounts(totalsByCategory){
            var discount = 0;
            var preDiscountTotal = sum(Object.values(totalsByCategory));

            if(preDiscountTotal >= 100 && preDiscountTotal < 1000){
                discount = 0.1;
            } else if(preDiscountTotal >= 1000){
                discount = 0.15;
            }

            Object.entries(totalsByCategory).forEach(function(pair){
                totalsByCategory[pair[0]] -= pair[1] * discount;
            });

            return totalsByCategory;
        }

        function applyTaxes(totalsByCategory){
            totalsByCategory.alcohol += totalsByCategory.alcohol *= 0.155;
            totalsByCategory.other += totalsByCategory.other *= 0.075;
            return totalsByCategory;
        }

        function roundToPennies(amount){
            var retval;
            var hasThousandths = amount.toString().match(/^(\d*\.\d{2})(\d)\d*$/);
            if(hasThousandths){
                if(parseInt(hasThousandths[2]) >= 5) {
                    retval =  parseFloat((parseFloat(hasThousandths[1]) + 0.01).toFixed(2));
                } else {
                    retval = parseFloat(hasThousandths[1]);
                }
            } else retval = amount;
            return retval;
        }
    }

};
