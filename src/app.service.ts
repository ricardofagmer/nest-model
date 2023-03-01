import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { APP_NAME, MESSAGE } from "./constants/constants";

@Injectable()
export class AppService {
/*  @InjectRepository(UserEntity)
  private readonly repository: Repository<UserEntity>;*/

  constructor(

    @Inject(APP_NAME)
    private readonly name: string,
    @Inject(MESSAGE)
    private readonly message: string,
  ) {
  }


  getHello(): string {
    return "Hey Hello from " +  this.name + this.message;
  }

  async getUsers(): Promise<UserEntity[]> {
    return //await this.repository.find();
  }

}
