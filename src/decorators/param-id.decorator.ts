import { createParamDecorator, ExecutionContext, NotFoundException, SetMetadata } from "@nestjs/common";

enum Role {
    User = 1,
    Admin = 2
}

export const ParamId = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {

    return Number(ctx.switchToHttp().getRequest().params.id);
});


export const ROLES_KEY = 'ROLES';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);


