var isKotlinKeyword = require('../index');

describe('#Testing suite', function() {
    
    describe("Testing all keywords", function () {
        it('all provided keywords should exist', function() {
            expect(isKotlinKeyword("test")).toBe(false);
            expect(isKotlinKeyword("as")).toBe(true);
            expect(isKotlinKeyword("break")).toBe(true);
            expect(isKotlinKeyword("class")).toBe(true);
            expect(isKotlinKeyword("continue")).toBe(true);
            expect(isKotlinKeyword("do")).toBe(true);
            expect(isKotlinKeyword("else")).toBe(true);
            expect(isKotlinKeyword("false")).toBe(true);
            expect(isKotlinKeyword("for")).toBe(true);
            expect(isKotlinKeyword("fun")).toBe(true);
            expect(isKotlinKeyword("if")).toBe(true);
            expect(isKotlinKeyword("in")).toBe(true);
            expect(isKotlinKeyword("interface")).toBe(true);
            expect(isKotlinKeyword("is")).toBe(true);
            expect(isKotlinKeyword("null")).toBe(true);
            expect(isKotlinKeyword("object")).toBe(true);
            expect(isKotlinKeyword("package")).toBe(true);
            expect(isKotlinKeyword("return")).toBe(true);
            expect(isKotlinKeyword("super")).toBe(true);
            expect(isKotlinKeyword("this")).toBe(true);
            expect(isKotlinKeyword("throw")).toBe(true);
            expect(isKotlinKeyword("try")).toBe(true);
            expect(isKotlinKeyword("typealias")).toBe(true);
            expect(isKotlinKeyword("val")).toBe(true);
            expect(isKotlinKeyword("var")).toBe(true);
            expect(isKotlinKeyword("when")).toBe(true);
            expect(isKotlinKeyword("while")).toBe(true);
        });
    });
});

   
