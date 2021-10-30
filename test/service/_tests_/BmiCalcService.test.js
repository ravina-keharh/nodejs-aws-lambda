const bmiCalcService = require('../../../src/service/BmiCalcService').BmiCalcService;
test('test calc for w=16.6 and h=99.1', () => {
	let weight = 16.6;
	let height = 99.1;
	let bmi = new bmiCalcService().performCalc(weight, height);
	expect(bmi).toEqual("16.90");
});

test('test calc for w=16.6 and h=0', () => {
	let weight = 16.6;
	let height = 0;
	expect(() => {
	    new bmiCalcService().performCalc(weight, height);
	}).toThrow();
});