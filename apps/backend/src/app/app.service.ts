import { Injectable } from "@nestjs/common";
import { AppDTO } from './app.dto';
import { plainToClass } from "class-transformer";
import { Types } from 'mongoose';

const ObjectId = Types.ObjectId;

@Injectable()
export class AppService {
  getData(): AppDTO {
    const res = {
      _id: ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    };
    return plainToClass(AppDTO,res);
  }
}
