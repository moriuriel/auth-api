import { Expose } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name!: string

  @IsNotEmpty()
  @IsString()
  @Expose()
  email!: string

  @IsNotEmpty()
  @IsString()
  @Expose()
  password!: string
}
