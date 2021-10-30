const Handler = require('./app/Handler').Handler;
const BmiCalcService = require('./service/BmiCalcService').BmiCalcService;
const handler = new Handler(new BmiCalcService());
exports.performBmiCalc = handler.handleCalculation();
