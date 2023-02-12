import { LogInterceptor } from "./interceptors/log.interceptor";
import { Controller, Get, Param, ParseIntPipe, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { ParamId } from "./decorators/param-id.decorator";
import { User } from "./decorators/user.decorator";
import { UserEntity } from "./entities/user.entity";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getHello(): Promise<UserEntity[]> {
    return this.appService.getUsers();
  }

  @Get("a")
  a(@User() user): string {
    return "oi";
  }

  @Get("pipe")
  aa(@Param("id", ParseIntPipe) id: number): string {
    return this.appService.getHello();
  }

  @UseInterceptors(LogInterceptor)
  @Get("interceptor")
  bb(): string {
    return this.appService.getHello();
  }

  @Get(":id")
  cc(@ParamId() id: number): string {
    console.log(id);
    return this.appService.getHello();
  }

  /*createWithRelations(){
      this.repository.createQueryBuilder()
      .relatorion(entities, 'usuarios')
      of(usuario)
      .add(['ricardeo', 'fagmer'])
    }*/
}
