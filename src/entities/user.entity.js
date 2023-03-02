import { __decorate, __metadata } from "tslib";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { HouseEntity } from "./house.entity";
let UserEntity = class UserEntity {
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    OneToMany(() => HouseEntity, house => house.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "houses", void 0);
UserEntity = __decorate([
    Entity()
], UserEntity);
export { UserEntity };
//# sourceMappingURL=user.entity.js.map