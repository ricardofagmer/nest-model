import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    @Inject("APP_NAME")
    private readonly name: string,
  ) {
  }


  getHello(): string {
    return "Hey Hello from " +  this.name;
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

}