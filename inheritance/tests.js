describe("filter", function () {
  it("filter Not",
      function () {
          assert.equal("This is good", "This is not good".filter(["not"]));
      });
});


describe("bubble sort", function () {
  it("return sorted array ",
      function () {
          assert.deepEqual([5,6,7,8], [8, 6, 7, 5].bubbleSort());
      });
});
