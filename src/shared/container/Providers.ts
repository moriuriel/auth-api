import { IHashProvider, BCrptyHashProvider } from 'shared/providers'
import { container } from 'tsyringe'

container.registerSingleton<IHashProvider>(
  'BCrptyHashProvider',
  BCrptyHashProvider
)
