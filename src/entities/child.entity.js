import { __decorate, __metadata } from "tslib";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";
let ChildEntity = class ChildEntity {
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", Number)
], ChildEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], ChildEntity.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], ChildEntity.prototype, "age", void 0);
__decorate([
    ManyToOne(() => UserEntity),
    JoinColumn(),
    __metadata("design:type", UserEntity)
], ChildEntity.prototype, "user", void 0);
ChildEntity = __decorate([
    Entity()
], ChildEntity);
export { ChildEntity };
//# sourceMappingURL=child.entity.js.map