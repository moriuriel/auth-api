import { Expose } from 'class-transformer'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class CreateFeatureDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name!: string

  @IsNotEmpty()
  @IsString()
  @Expose()
  description!: string

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  is_default!: boolean
}
