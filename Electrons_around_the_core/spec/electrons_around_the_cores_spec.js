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
});
