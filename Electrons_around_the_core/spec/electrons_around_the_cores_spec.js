describe('Find Electrons', function() {
	beforeEach(function() {
		findCores = new coresAroundElectrons();
	});

	it('should return 0 for an empty string', function() {
		expect(findCores.add('')).toEqual(0);
	});
});
