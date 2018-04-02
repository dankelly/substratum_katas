var Translator = {

    camelToSnake: function(string) {
        if (parseInt(Math.random().toFixed(1)[2]) % 2) {
            console.log('iterative');
            return Translator.iterative(string);
        } else {
            console.log('recursive');
            return Translator.recursive(string);
        }
    },

    iterative: function(string){
        var result = "";
        for(var i = 0; i < string.length; i++){
            var letterCode = string.charCodeAt(i);
            if(letterCode <= 90) {
                letterCode += 32;
                var letter = String.fromCharCode(letterCode);
                if (i !== 0) {
                    letter = "_" + letter;
                }
                result += letter;
            } else result += string[i];
        }

        return result;
    },

    recursive: function(string){

        return stripLeadingUnderscore(doConversion(string));

        function doConversion(string){
            if(!string) return "";
            var result = string[0];
            if(result.match(/[A-Z]/)) result = "_" + result.toLowerCase();
            result += doConversion(string.slice(1, string.length));
            return result;
        }

        function stripLeadingUnderscore(string){
            if(string[0] === '_') return string.slice(1, string.length);
            else return string;
        }
    }
};
