import { Exclude, Expose, Transform } from "class-transformer";

@Expose()
export class BaseDTOClass {
  @Transform(((value, obj) => value ? value.toString() : obj._id.toString()))
  readonly _id?: string;

  readonly createdAt?: string;

  readonly updatedAt?: string;

  readonly deletedAt?: string;

  @Exclude()
  readonly __v?: string;
}
