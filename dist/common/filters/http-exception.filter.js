"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    logger = new common_1.Logger(AllExceptionsFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = exception instanceof common_1.HttpException
            ? exception.getResponse()
            : (exception?.message || 'Internal server error');
        if (exception?.code === 11000 || (exception?.name === 'MongoServerError' && exception?.code === 11000)) {
            status = common_1.HttpStatus.CONFLICT;
            const keyValue = exception.keyValue;
            if (keyValue) {
                const field = Object.keys(keyValue)[0];
                message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`;
            }
            else {
                message = 'Duplicate key error.';
            }
        }
        else if (exception?.name === 'ValidationError') {
            status = common_1.HttpStatus.BAD_REQUEST;
            message = Object.values(exception.errors || {})
                .map((err) => err.message)
                .join(', ');
        }
        else if (exception?.name === 'CastError') {
            status = common_1.HttpStatus.BAD_REQUEST;
            message = `Invalid ${exception.path}: ${exception.value}`;
        }
        const errorResponse = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message: typeof message === 'object' && message !== null && 'message' in message
                ? message.message
                : message,
        };
        if (status >= 500) {
            this.logger.error(`${request.method} ${request.url} → ${status}`, exception instanceof Error ? exception.stack : String(exception));
        }
        response.status(status).json(errorResponse);
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=http-exception.filter.js.map