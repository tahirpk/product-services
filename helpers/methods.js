const { response } = require("express");
/**
 *
 * @param {*} message
 * @param {*} payload
 * @returns
 */
exports.successResponse = (message, payload) => {
  return {
    status: true,
    message: message,
    package: payload,
  };
};

/**
 *
 * @param message
 * @param payload
 * @returns {{message, status: boolean}}
 */
exports.failResponse = (message, payload = null) => {
  let response = {
    status: false,
    message: message,
  };

  if (payload) {
    response.payload = payload;
  }

  return response;
};

/**
 *
 * @param {*} digit
 * @param {*} limit
 * @returns
 */
exports.RandomNumber = (digit, limit) => {
  return Math.floor(Math.random() * digit + limit);
};
