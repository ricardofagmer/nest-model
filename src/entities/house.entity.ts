import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity()
export class HouseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne( () =>  UserEntity)
  @JoinColumn()
  user: UserEntity;

}
