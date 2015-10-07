var yourCode = require('../src');

describe('#compact', function() {
  it('returns a new array with all provided undefined values removed', function() {
    var input = [undefined, 1,2,3, null, 'foo', 'bar'];
    expect(yourCode.compact(input)).toEqual([1,2,3, 'foo', 'bar']);
  });

  it('returns an empty array if all provided values are undefined', function() {
    var input = [undefined, undefined, undefined];
    expect(yourCode.compact(input)).toEqual([]);
  });
});

describe('#all', function() {
  it('returns false if any element in the provided array is not even', function() {
    var input = [1,3,5,6,7];
    expect(yourCode.allEvenOrOdd(input)).toBe(false);
  });

  it('returns true if every element in the provided array is even', function() {
    var input = [2,4,6,8];
    expect(yourCode.allEvenOrOdd(input)).toBe(true);
  });
  
  it('returns true if every element in the provided array is odd', function() {
    var input = [1,3,5,7];
    expect(yourCode.allEvenOrOdd(input)).toBe(true);
  });
  
  it('returns false if every element in the provided array is not odd', function() {
    var input = [1,2,5,7];
    expect(yourCode.allEvenOrOdd(input)).toBe(false);
  });
});

describe('#any', function() {
  it('returns true if any element in the provided array is even', function() {
    var input = [1,3,5,6,7];
    expect(yourCode.anyEven(input)).toBe(true);
  });

  it('returns true if any element in the provided array is odd', function() {
    var input = [1,2,9];
    expect(yourCode.anyOdd(input)).toBe(true);
  });
});

describe('#partition', function() {
  it('creates a new array whose first element is an array containing all positive matches for the provided comparison function and whose second element is an array containing all negative matches', function() {
    var input = [1,2,3,4,5,6];
    expect(yourCode.partitionEvensAndOdds(input)).toEqual([[2,4,6], [1,3,5]]);
  });

  it('returns two empty arrays in an array when given an empty array', function() {
    var input = [];
    expect(yourCode.partitionEvensAndOdds(input)).toEqual([[], []]);
  });
});

describe("sumOfEvenAscii", function() {
  it('maps a string to an array of ascii values, filters for the even values, and reduces the filtered results to the sum of each number', function() {
    expect(yourCode.sumOfEvenAscii("hello")).toBe(320);
  });
});