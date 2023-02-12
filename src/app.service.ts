import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>) {
  }


  getHello(): string {
    return 'Hey Hello'
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

}
