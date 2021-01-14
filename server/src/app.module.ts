
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from "@nestjs/serve-static";
import { Connection } from 'typeorm';
import { join } from 'path';

import { User } from './users/user.entity';
import { InventoryItem } from './inventory-items/inventory-item.entity';

import { UsersModule } from './users/users.module';
import { InventoryItemsModule } from './inventory-items/inventory-items.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../..", "/client/dist/client"),
      exclude: ['/api*'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, InventoryItem],
      synchronize: true,
    }),
    UsersModule,
    InventoryItemsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}

// Setting synchronize: true shouldn't be used in production - otherwise you can lose production data