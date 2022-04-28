import { Expose } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateFeatureDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name!: string

  @IsNotEmpty()
  @IsString()
  @Expose()
  description!: string
}
