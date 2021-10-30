const headers = {'Content-type': 'application/json'};
class Result200 {
    constructor(message) {
        this.statusCode = 200;
        this.headers = headers;
        this.body = JSON.stringify({'result': message});
        this.isBase64Encoded = false;
    }
}

class Result400 {
    constructor(message) {
        this.statusCode = 400;
        this.headers = headers;
        this.body = JSON.stringify({'error': message});
        this.isBase64Encoded = false;
    }
}

class Result500 {
    constructor(message) {
        this.statusCode = 500;
        this.headers = headers;
        this.body = JSON.stringify({'error': message});
        this.isBase64Encoded = false;
    }
}
exports.Result200 = Result200;
exports.Result400 = Result200;
exports.Result500 = Result200;