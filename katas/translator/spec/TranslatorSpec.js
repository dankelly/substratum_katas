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

    xdescribe("directed to translate the multi-character, all-uppercase string 'OMGASNAFU'", function () {
        var result =  Translator.camelToSnake("OMGASNAFU");
        it("produces 'o_m_g_a_s_n_a_f_u", function () {
            expect(result).toEqual("o_m_g_a_s_n_a_f_u");
        });
    });

    describe("directed to translate a name 'beginningWithALowercaseCharacter'", function(){
        var result = Translator.camelToSnake("beginningWithALowercaseCharacter");
        it("produces 'beginning_with_a_lowercase_character'", function(){
            expect(result).toEqual("beginning_with_a_lowercase_character");
        })
    });

    describe("directed to translate 'WithAnUppercaseOne'", function(){
        var result = Translator.camelToSnake("WithAnUppercaseOne");
        it("produces 'with_an_uppercase_one'", function(){
            expect(result).toEqual("with_an_uppercase_one");
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

    describe("directed to translate 'APIMethodV1'", function(){
        var result = Translator.camelToSnake("APIMethodV1");
        it("produces 'api_method_v_1'", function(){
            expect(result).toEqual("api_method_v_1");
        })
    });

    describe("directed to translate 'AnAPIMethodV2'", function(){
        var result = Translator.camelToSnake("AnAPIMethodV2");
        it("produces 'an_api_method_v_2'", function(){
            expect(result).toEqual("an_api_method_v_2");
        })
    });

    describe("directed to translate 'anAPIMethodV3'", function(){
        var result = Translator.camelToSnake("anAPIMethodV3");
        it("produces 'an_api_method_v_3'", function(){
            expect(result).toEqual("an_api_method_v_3");
        })
    });

});
