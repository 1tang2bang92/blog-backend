import { Global, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        if (configService.get<string>('environment') == 'production') {
          return {
            type: 'postgres',
            host: configService.get<string>('db.postgres.host'),
            port: configService.get<number>('db.postgres.port'),
          }
        } else {
          return {
            type: 'sqlite',
            database: configService.get<string>('db.sqlite.database'),
            autoLoadEntities: true,
            synchronize: true,
          }
        }
      },
    }),
  ],
})
export class DatabaseModule {}
