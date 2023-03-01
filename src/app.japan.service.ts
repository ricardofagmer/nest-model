import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { APP_NAME, MESSAGE } from "./constants/constants";

//@Injectable()
export class AppJapanService {

  constructor(
  /*  @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,*/
    @Inject(APP_NAME) private readonly name: string,
    @Inject(MESSAGE) private readonly message: string,
  ) {
  }


  getHello(): string {
    return "「こんにちは世界  " + this.name + ' <-> ' +this.message;
  }


}
