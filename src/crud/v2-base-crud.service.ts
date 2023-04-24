import { Injectable } from "@nestjs/common";
import { Mixin } from "ts-mixer";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";

export class Person {
  id: number;
  name: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

@Injectable()
class UPDATECLASS<T> {
  Entity: Constructor<T>;
  @InjectRepository(entity)
  readonly repository: Repository<T>;

  async update(entity: Partial<Omit<T, OmitValues>>): Promise<T> {
    const newEntity = Object.assign(new this.Entity(), entity) as DeepPartial<T>;
    return this.repository.save(newEntity);
  }
}

@Injectable()
export class BASE {
  findBase() {
    return;
  }

  findBase02() {
    return;
  }
}

@Injectable()
export class FINDALL {
  findAll() {
    return;
  }
}

@Injectable()
export class FINDONE {
  findOne() {
    return;
  }
}

const DQL_ENUM = {
  FINDALL,
  FINDONE,
} as const;

type WithDQL = { [key in keyof typeof DQL_ENUM]?: any };
type Constructor = new (...args: any[]) => {};

function Decorador<OP>(constructor: Constructor, methods: { [key in keyof OP] }) {
  return class extends constructor {
    constructor(...args: any[]) {
      if (methods["FINDALL"])
        new UPDATECLASS();
      super(...args);
    }
  };
}

function AddMethod<T>(methods: WithDQL, entity: { id: number }) {
  return function(constructor: Function) {
    if (methods["FINDALL"]) {
        constructor.prototype.update = function() {
          console.log(entity.id);
      };
    }
  };

  export function DynamicCRUD<T, OP>(entity: Constructor, methods: { [key in keyof OP] }) {
  }


  @Injectable()
  @AddMethod({ FINDALL }, { id: 2})
  export class ExampleRepository {
    constructor() {
      (<any>this).update()
    }
    }
  }


