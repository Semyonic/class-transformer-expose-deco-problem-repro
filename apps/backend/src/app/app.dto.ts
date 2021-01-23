import { Exclude, Expose } from "class-transformer";
import { BaseDTOClass } from './app-base.dto';

export class AppDTO extends BaseDTOClass {
  @Expose({ name: 'id', toPlainOnly: true })
  readonly _id: string;

  @Exclude()
  createdAt: string;

  @Exclude()
  updatedAt: string;

  @Exclude()
  deletedAt: string
}
