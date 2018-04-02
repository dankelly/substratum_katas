var Translator = {

    camelToSnake: function(string){

        return stripLeadingUnderscore( convert(string) );

        function convert(string){
            if(!string) return "";
            var result = string[0];
            if(result.match(/[A-Z]/)) result = "_" + result.toLowerCase();
            result += convert(string.slice(1, string.length));
            return result;
        }

        function stripLeadingUnderscore(string){
            if(string[0] === '_') return string.slice(1, string.length);
            else return string;
        }
    }
};
