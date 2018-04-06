var Translator = {

    camelToSnake: function(string){

        function preProcess(string){
            var flaggedForEndConversion = string.match(/[A-Z]{2}$/);
            string = convertMiddleCapsForCapsSubstringsOfLengthThreeOrGreater(string);
            if(flaggedForEndConversion) string = convertEndWhenPartOfAbbreviation(string);
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
            string = stripLeadingUnderscore(string);
            string = stripUnderscoresBetweenDigits(string);
            //string = stripUnderscoresSeparatingAbbreviations(string);
            //string = stripUnderscoresBetweenSingleLetters(string);
            return string;
        }

        function convertMiddleCapsForCapsSubstringsOfLengthThreeOrGreater(string){
            var regex = /([A-Z])([A-Z]+)([A-Z])/;
            var match = string.match(regex);
            while(match){
                string = string.replace(match[1]+match[2]+match[3], match[1]+match[2].toLowerCase()+match[3]);
                match = string.match(regex);
            }
            return string;
        }

        function convertEndWhenPartOfAbbreviation(string){
            return string.replace(/[A-Z]$/, string.slice(string.length-1).toLowerCase());
        }

        function stripLeadingUnderscore(string){
            if(string[0] === '_') string = string.slice(1, string.length);
            return string;
        }

        function stripUnderscoresBetweenDigits(string){
            return string.replace(/(?<=\d)_(?=\d)/g, "");
        }

        // function stripUnderscoresSeparatingAbbreviations(string){
        //     return string.replace(/(?<=[a-z]{2,})_([a-z])_(?=[a-z]{2,})/, "$1");
        // }
        //
        // function stripUnderscoresBetweenSingleLetters(string){
        //     return string.replace(/(?<!\d){2,}_([a-z])_(?!\d){2,}/g, "$1");
        //
        // }

        // string = preProcess(string);
        return postProcess( convert (preProcess(string) ) );
    }
};
