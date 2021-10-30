const Result = require('./Result')
class Handler {
    constructor(bmiCalcService) {
        this.handleCalculation = async(event, context, callback) => {
            try {
                let weight = event.queryStringParameters.weight;
                let height = event.queryStringParameters.weight;
                if(isNaN(weight) || isNaN(height)) {
                    return new Result.Result400('weight or height is invalid, it should be a number.')
                } 
                let bmiResult = await this.bmiCalcService.performCalc(weight, height);
                return new Result.Result200(bmiResult)
            } catch (error) {
                return new Result.Result500(error)
            }
        };
        this.bmiCalcService = bmiCalcService;
    }
}
exports.Handler = Handler;