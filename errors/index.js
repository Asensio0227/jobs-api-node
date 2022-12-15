const CustomAPIError = require('./custom-error');
const BadRequestError = require('./bad-request');
const notFoundError = require('./not-found');
const UnAuthorizedError =require('./unauthenticated')

module.exports = {
  CustomAPIError,
  BadRequestError,
  notFoundError,
  UnAuthorizedError
}