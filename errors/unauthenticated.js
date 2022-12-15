const CustomAPIError = require('./custom-error');
const { StatusCodes } = require('http-status-codes');

class UnAuthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.UNAUTHORIZED;
  }
};

module.exports = UnAuthorizedError;