const jwt = require('jsonwebtoken');
const { UnAuthorizedError } = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
  const authHeaders = req.headers.authorization
  
  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    throw new UnAuthorizedError('No token provided');
  }
  // const token=
  try {
    
  } catch (error) {
    throw new UnAuthorizedError(`Can't access token`)
  }
}

module.exports = authenticationMiddleware;