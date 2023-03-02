export class LogMiddleware {
    use(req, res, next) {
        console.log('Middleware start');
        next();
    }
}
//# sourceMappingURL=log.middleware.js.map