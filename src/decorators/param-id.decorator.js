import { createParamDecorator, SetMetadata } from "@nestjs/common";
var Role;
(function (Role) {
    Role[Role["User"] = 1] = "User";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
export const ParamId = createParamDecorator((_data, ctx) => {
    return Number(ctx.switchToHttp().getRequest().params.id);
});
export const ROLES_KEY = 'ROLES';
export const Roles = (...roles) => SetMetadata(ROLES_KEY, roles);
//# sourceMappingURL=param-id.decorator.js.map