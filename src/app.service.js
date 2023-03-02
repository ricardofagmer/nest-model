import { __awaiter, __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable } from "@nestjs/common";
import { APP_NAME, MESSAGE } from "./constants/constants";
let AppService = class AppService {
    /*  @InjectRepository(UserEntity)
      private readonly repository: Repository<UserEntity>;*/
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
    getHello() {
        return "Hey Hello from " + this.name + this.message;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return; //await this.repository.find();
        });
    }
};
AppService = __decorate([
    Injectable(),
    __param(0, Inject(APP_NAME)),
    __param(1, Inject(MESSAGE)),
    __metadata("design:paramtypes", [String, String])
], AppService);
export { AppService };
//# sourceMappingURL=app.service.js.map