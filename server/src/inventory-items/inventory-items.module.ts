import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryItemsController } from './inventory-items.controller';
import { InventoryItemsService } from './inventory-items.service';
import { InventoryItem } from './inventory-item.entity'

@Module({
  imports: [TypeOrmModule.forFeature([InventoryItem])],
  exports: [TypeOrmModule],
  controllers: [InventoryItemsController],
  providers: [InventoryItemsService]
})
export class InventoryItemsModule {}
