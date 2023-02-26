import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity()
export class ChildEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToOne( () =>  UserEntity)
  @JoinColumn()
  user: UserEntity;

}
