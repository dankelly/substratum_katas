/**
 *  Test-drive a function that will accept a camel-cased name
 *  either beginningWithALowercaseCharacter or WithAnUppercaseOne,
 *  and produce a snake-cased version of that name, like
 *  beginning_with_a_lowercase_character or with_an_uppercase_one.
 */

describe("A translator", function() {

    describe("directed to translate an empty string", function () {
        var result =  Translator.camelToSnake("");
        it("produces an empty string", function () {
            expect(result).toEqual("");
        });
    });

    describe("directed to translate a single-character, lowercase string", function () {
        var result =  Translator.camelToSnake("x");
        it("produces that same string", function () {
            expect(result).toEqual("x");
        });
    });

    describe("directed to translate a single, uppercase character", function () {
        var result =  Translator.camelToSnake("S");
        it("produces the lowercase version of that character", function () {
            expect(result).toEqual("s");
        });
    });

    describe("directed to translate the multi-character, all-lowercase string 'zyxwvutsrqponmlkjihgfedcba'", function () {
        var result =  Translator.camelToSnake("zyxwvutsrqponmlkjihgfedcba");
        it("produces that same string", function () {
            expect(result).toEqual("zyxwvutsrqponmlkjihgfedcba");
        });
    });

    describe("directed to translate a name 'beginningWithALowercaseCharacter'", function(){
        var result = Translator.camelToSnake("beginningWithALowercaseCharacter");
        it("produces 'beginning_with_a_lowercase_character'", function(){
            expect(result).toEqual("beginning_with_a_lowercase_character");
        })
    });

    describe("directed to translate 'BeginsWithUppercase'", function(){
        var result = Translator.camelToSnake("BeginsWithUppercase");
        it("produces 'begins_with_uppercase'", function(){
            expect(result).toEqual("begins_with_uppercase");
        })
    });

    describe("directed to translate 'aSimpleName'", function(){
        var result = Translator.camelToSnake("aSimpleName");
        it("produces 'a_simple_name'", function(){
            expect(result).toEqual("a_simple_name");
        })
    });

    describe("directed to translate 'ANextTestCase'", function(){
        var result = Translator.camelToSnake("ANextTestCase");
        it("produces 'a_next_test_case'", function(){
            expect(result).toEqual("a_next_test_case");
        })
    });

    describe("directed to translate 'Fahrenheit451ByRayBradbury'", function(){
        var result = Translator.camelToSnake("Fahrenheit451ByRayBradbury");
        it("produces 'fahrenheit_451_by_ray_bradbury'", function(){
            expect(result).toEqual("fahrenheit_451_by_ray_bradbury");
        })
    });

    describe("directed to translate 'Fahrenheit451ByRayBradburyPage1'", function(){
        var result = Translator.camelToSnake("Fahrenheit451ByRayBradburyPage1");
        it("produces 'fahrenheit_451_by_ray_bradbury_page_1'", function(){
            expect(result).toEqual("fahrenheit_451_by_ray_bradbury_page_1");
        })
    });

    describe("directed to translate 'fahrenheit451ByRayBradburyPage93'", function(){
        var result = Translator.camelToSnake("fahrenheit451ByRayBradburyPage93");
        it("produces 'fahrenheit_451_by_ray_bradbury_page_93'", function(){
            expect(result).toEqual("fahrenheit_451_by_ray_bradbury_page_93");
        })
    });

    describe("directed to translate 'APIMethodV1ForExaminingRESTCalls'", function(){
        var result = Translator.camelToSnake("APIMethodV1ForExaminingRESTCalls");
        it("produces 'api_method_v_1_for_examining_rest_calls'", function(){
            expect(result).toEqual("api_method_v_1_for_examining_rest_calls");
        })
    });

    describe("directed to translate 'AnAPIMethodV2ForExaminingRESTCallToURL'", function(){
        var result = Translator.camelToSnake("AnAPIMethodV2ForExaminingRESTCallToURL");
        it("produces 'an_api_method_v_2_for_examining_rest_call_to_url'", function(){
            expect(result).toEqual("an_api_method_v_2_for_examining_rest_call_to_url");
        })
    });

});
