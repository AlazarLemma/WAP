describe("sum", function () {
    it("takes 3 element, and return sum",
        function () {
            assert.equal(6, sum([1,2,3]));
        });
});

describe("reverse", function () {
    it("takes 3 element, and return sum",
        function () {
            assert.equal("cba", reverse("abc"));
        });
});

describe("Multiply", function () {
    it("takes 3 element, and return sum",
        function () {
            assert.equal(6, multip([1,2,3]));
        });
});
describe("FilterLong", function () {
    it("e element and send the",
        function () {   
            assert.equal("hello", filterLong(["hello","hi","z"],2));
        });
});