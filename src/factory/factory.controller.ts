import {Controller, Get, Inject} from "@nestjs/common";

@Controller('factory')
export class FactoryController {
    constructor(
        @Inject("FACTORY")
        private readonly factory: string) {
    }

    @Get('fact')
    getHello(): string {
        return  this.factory;
    }


}
