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

    describe("directed to translate a single-character, uppercase string", function () {
        var result =  Translator.camelToSnake("S");
        it("produces that same string", function () {
            expect(result).toEqual("s");
        });
    });

    describe("directed to translate a multi-character, all-lowercase string", function () {
        var result =  Translator.camelToSnake("zyxwvutsrqponmlkjihgfedcba");
        it("produces that same string", function () {
            expect(result).toEqual("zyxwvutsrqponmlkjihgfedcba");
        });
    });

    describe("directed to translate a multi-character, all-uppercase string", function () {
        var result =  Translator.camelToSnake("OMGASNAFU");
        it("produces a version of that string consisting entirely of lowercase characters, each separated by a single underscore", function () {
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
            expect(result).toEqual("");
        })
    });

});
