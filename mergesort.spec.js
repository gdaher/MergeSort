describe('Split Array function', function() {
    it('is able to split an even array into two halves', function() {
        expect(split([1,2,3,4,5,6,7,8])).toEqual([[1,2,3,4],[5,6,7,8]]);
    });
    it('is able to split an odd array into two halves', function() {
        expect(split([1,2,3,4,5,6,7,8,9])).toEqual([[1,2,3,4],[5,6,7,8]]);
    });
});