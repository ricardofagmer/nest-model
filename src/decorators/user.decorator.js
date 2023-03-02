import { createParamDecorator, NotFoundException } from "@nestjs/common";
export const User = createParamDecorator((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.user) {
        return request.user;
    }
    else {
        console.log('user');
        throw new NotFoundException();
    }
});
//# sourceMappingURL=user.decorator.js.map