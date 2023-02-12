import { createParamDecorator, ExecutionContext, NotFoundException } from "@nestjs/common";


export const User = createParamDecorator((_: unknown, ctx: ExecutionContext) => {

    const request = ctx.switchToHttp().getRequest();

    if (request.user) {
        return request.user;
    } else {
        console.log('user');
        
        throw new NotFoundException();
    }

});