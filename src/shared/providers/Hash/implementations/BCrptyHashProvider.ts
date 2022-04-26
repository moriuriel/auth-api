import { IHashProvider } from '../IHash'
import { hash, compare } from 'bcryptjs'

export class BCrptyHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8)
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed)
  }
}
