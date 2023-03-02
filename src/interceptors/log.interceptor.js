import { tap } from "rxjs";
export class LogInterceptor {
    intercept(context, next) {
        const dt = Date.now();
        return next.handle().pipe(tap(() => {
            console.log(`Teste interceptor: ${dt}`);
        }));
    }
}
//# sourceMappingURL=log.interceptor.js.map