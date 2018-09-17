describe('Split Array function', function() {
    it('is able to split an even array into two halves', function() {
        expect(split([1,2,3,4,5,6,7,8])).toEqual([[1,2,3,4],[5,6,7,8]]);
    });
    it('is able to split an odd array into two halves', function() {
        expect(split([1,2,3,4,5,6,7,8,9])).toEqual([[1,2,3,4],[5,6,7,8],9]);
    });
});


describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(mergeArr([1,5,9], [0,3,7])).toEqual([0,1,3,5,7,9]);
    });
  });

  describe('MergeSort', function(){
    it('is able to sort even array', function(){
      expect(mergeSort([2,7,0,-1])).toEqual([-1,0,2,7]);
    });
    it('is able to sort odd array', function(){
        expect(mergeSort([2,7,14,0,-1,])).toEqual([-1,0,2,7,14]);
    });
  });

