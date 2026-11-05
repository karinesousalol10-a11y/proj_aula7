import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransacoesModule } from './transacoes/transacoes.module';
@Module({ imports: [ConfigModule.forRoot({ isGlobal: true }), MongooseModule.forRootAsync({ imports: [ConfigModule], inject: [ConfigService], useFactory: (config: ConfigService) => ({ uri: config.get<string>('MONGODB_URI') }) }), TransacoesModule], controllers: [AppController], providers: [AppService] })
export class AppModule {}
