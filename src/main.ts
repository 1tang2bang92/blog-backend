import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  await app.listen(
    configService.get<number>('http.port'),
    configService.get<string>('http.host')
  )
}
bootstrap()
