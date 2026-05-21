describe('Find Electrons', function() {
	beforeEach(function() {
		findCores = new coresAroundElectrons();
	});

	it('should return "NO ROLLED DICES" for an empty Array', function() {
		expect(findCores.add([])).toEqual("NO ROLLED DICES");
	});
});
