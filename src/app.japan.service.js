import { __decorate, __metadata, __param } from "tslib";
import { Inject } from "@nestjs/common";
import { APP_NAME, MESSAGE } from "./constants/constants";
//@Injectable()
let AppJapanService = class AppJapanService {
    constructor(
    /*  @InjectRepository(UserEntity)
      private readonly repository: Repository<UserEntity>,*/
    name, message) {
        this.name = name;
        this.message = message;
    }
    getHello() {
        return "「こんにちは世界  " + this.name + ' <-> ' + this.message;
    }
};
AppJapanService = __decorate([
    __param(0, Inject(APP_NAME)),
    __param(1, Inject(MESSAGE)),
    __metadata("design:paramtypes", [String, String])
], AppJapanService);
export { AppJapanService };
//# sourceMappingURL=app.japan.service.js.map