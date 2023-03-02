import { __decorate, __metadata } from "tslib";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";
let HouseEntity = class HouseEntity {
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", Number)
], HouseEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], HouseEntity.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], HouseEntity.prototype, "address", void 0);
__decorate([
    ManyToOne(() => UserEntity),
    JoinColumn(),
    __metadata("design:type", UserEntity)
], HouseEntity.prototype, "user", void 0);
HouseEntity = __decorate([
    Entity()
], HouseEntity);
export { HouseEntity };
//# sourceMappingURL=house.entity.js.map