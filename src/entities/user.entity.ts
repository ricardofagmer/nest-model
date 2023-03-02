import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { HouseEntity } from "./house.entity";

@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

 @OneToMany(() => HouseEntity, house => house.user)
  houses: HouseEntity[];
}
