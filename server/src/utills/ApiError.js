export default class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;

    // Maintains proper stack trace (only in V8 engines like Node.js)
    Error.captureStackTrace(this, this.constructor);
  }
}
