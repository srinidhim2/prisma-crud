// src/errors/HttpError.ts

export class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, HttpError.prototype); // 👈 Required for instanceof to work
  }
}
