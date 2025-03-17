// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { BoardModule } from './modules/board/board.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 모든 모듈에서 ConfigModule 사용 가능
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
         type: 'postgres',
         host: configService.get('DB_HOST'),
         port: Number(configService.get<number>('DB_PORT') || 5432),
         username: configService.get('DB_USERNAME'),
         password: configService.get('DB_PASSWORD'),
         database: configService.get('DB_DATABASE'),
         entities: [__dirname + '/**/*.entity{.ts,.js}'],
         synchronize: true, // 개발 단계에서만 true, 운영 시 false 권장
      }),
      inject: [ConfigService],
    }),
    // 리소스 모듈들
    AuthModule,
    UsersModule,
    BoardModule,
  ],
})
export class AppModule {}
