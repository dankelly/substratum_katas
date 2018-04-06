var Translator = {

    camelToSnake: function(string){

        function preProcess(string){
            var flaggedForEndConversion = string.match(/[A-Z]{2}$/);
            var regex = /([A-Z])([A-Z]+)([A-Z])/;
            var match = string.match(regex);
            while(match){
                string = string.replace(match[1]+match[2]+match[3], match[1]+match[2].toLowerCase()+match[3]);
                match = string.match(regex);
            }
            if(flaggedForEndConversion) string = string.replace(/[A-Z]$/, string.slice(string.length-1).toLowerCase());
            return string;
        }

        function convert(string){
            if(!string) return "";
            var result = string[0];
            if(result.match(/[A-Z0-9]/)) result = "_" + result.toLowerCase();
            result += convert(string.slice(1, string.length));
            return result;
        }

        function postProcess(string){
            if(string[0] === '_') string = string.slice(1, string.length);
            return string.replace(/(?<=\d)_(?=\d)/g, "");
        }

        return postProcess( convert (preProcess(string) ) );
    }
};
