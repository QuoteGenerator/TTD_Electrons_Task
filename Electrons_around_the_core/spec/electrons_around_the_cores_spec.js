describe('Find Electrons', function() {
	beforeEach(function() {
		findCores = new coresAroundElectrons();
	});

	it('should return "NO ROLLED DICES" for an empty Array', function() {
		expect(findCores.add([])).toEqual("NO ROLLED DICES");
	});

	it('should return "NEEDS ATLEAST 4 ROLLED DICES" for [3, 6, 1]', function() {
		expect(findCores.add([3,6,1])).toEqual("NEEDS ATLEAST 4 ROLLED DICES");
	});
	
	it('should return "6" for [ 1, 2, 3, 4, 5 ]', function() {
		expect(findCores.add([1,2,3,4,5])).toEqual("6");
	});

	it('should return "4" for [ 2, 2, 3, 3 ]', function() {
		expect(findCores.add([ 2, 2, 3, 3 ])).toEqual("4");
	});

});
