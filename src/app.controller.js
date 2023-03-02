import { __decorate, __metadata, __param } from "tslib";
import { LogInterceptor } from "./interceptors/log.interceptor";
import { Controller, Get, Param, ParseIntPipe, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { ParamId } from "./decorators/param-id.decorator";
import { User } from "./decorators/user.decorator";
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getUsers();
    }
    a(user) {
        return "oi";
    }
    aa(id) {
        return this.appService.getHello();
    }
    bb() {
        return this.appService.getHello();
    }
    cc(id) {
        console.log(id);
        return this.appService.getHello();
    }
};
__decorate([
    Get('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    Get("a"),
    __param(0, User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "a", null);
__decorate([
    Get("pipe"),
    __param(0, Param("id", ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], AppController.prototype, "aa", null);
__decorate([
    UseInterceptors(LogInterceptor),
    Get("interceptor"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "bb", null);
__decorate([
    Get(":id"),
    __param(0, ParamId()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], AppController.prototype, "cc", null);
AppController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [AppService])
], AppController);
export { AppController };
//# sourceMappingURL=app.controller.js.map