describe ('caculate taxes test', function () {
it('should calculate lower-bracket taxes', function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
  });
  
  it('should calculate higher-bracket taxes', function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
  });
});

describe ('remove dupes', function () {
   it('should remove duplicates from an array', function () {
    expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(removeDupes([1, 2, 3])).toEqual([1, 2, 3])
    expect(removeDupes([1, 2, 3])).toBeInstanceOf(Array)
   });

  //  it('should remove duplicates from a string', function () {
  //   expect(removeDupes('hello')).toEqual('helo');
  //   expect(removeDupes('hello')).toBeInstanceOf(String);
  //  })

   it('should remove value from array', function() {
    expect(remove([1,2,3,4,5,6], 6)).not.toContain(6)
   })
  });

  it('should submit submitForm()', function () {
    submitForm();
    
    expect(usernames.length).toEqual(1);
  });
  describe('submitForm() test', () => {
    it('saves input val to usernames array', () => {
      input.value = 'guy1';
      submitForm(); 
      expect(usernames.length).toBe(2)
      expect(usernames).toContain('guy1', '')
    })
  })